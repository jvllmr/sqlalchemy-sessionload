from __future__ import annotations

import typing as t
from sqlalchemy.engine.result import ResultMetaData

import sqlalchemy.orm as sa_orm
from sqlalchemy import event

from .options import SessionLoadOption
import logging
from sqlalchemy.engine import Result, FrozenResult, BaseRow
from sqlalchemy.orm.loading import merge_result, instances
from sqlalchemy.engine.cursor import NoCursorDQLFetchStrategy, CursorResult
from sqlalchemy.engine.default import DefaultExecutionContext
from sqlalchemy.orm.context import QueryContext
from sqlalchemy.orm.context import ORMSelectCompileState

if t.TYPE_CHECKING:
    from sqlalchemy.orm.session import ORMExecuteState
log = logging.getLogger(__name__)


class SQLAlchemySessionLoad:
    def __init__(self, session_factory: t.Callable[[], sa_orm.Session]) -> None:
        event.listen(session_factory, "do_orm_execute", self.receive_orm_execute)

    def handle_select(
        self,
        orm_execute_state: ORMExecuteState,
        plugin_options: t.Sequence[SessionLoadOption],
    ):
        for option in plugin_options:
            if option.is_active(orm_execute_state):
                res = list(option.handle(orm_execute_state))
                cursor_strategy = NoCursorDQLFetchStrategy()
                execution_context = DefaultExecutionContext()
                compile_state = ORMSelectCompileState.create_for_statement(
                    orm_execute_state.statement, orm_execute_state.statement
                )
                query_context = QueryContext(
                    "?",
                    orm_execute_state.statement,
                    orm_execute_state.parameters,
                    orm_execute_state.session,
                    orm_execute_state.load_options,
                    orm_execute_state.execution_options,
                    orm_execute_state.bind_arguments,
                )

                cursor_result = CursorResult(
                    execution_context, cursor_strategy=cursor_strategy
                )
                log.info(f"Loaded {len(res)} objects from session")
                return instances(cursor_result, query_context)

    def receive_orm_execute(self, orm_execute_state: ORMExecuteState):
        if orm_execute_state.is_orm_statement and orm_execute_state.is_select:
            plugin_options: list[SessionLoadOption] = [
                option
                for option in orm_execute_state.user_defined_options
                if isinstance(option, SessionLoadOption)
            ]

            if plugin_options:
                return self.handle_select(orm_execute_state, plugin_options)
