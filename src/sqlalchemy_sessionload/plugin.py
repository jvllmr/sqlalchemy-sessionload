from __future__ import annotations

import logging
import typing as t

import sqlalchemy.orm as sa_orm
from sqlalchemy import event
from sqlalchemy.engine.result import IteratorResult, SimpleResultMetaData

from .options import SessionLoadOption

if t.TYPE_CHECKING:
    from sqlalchemy.orm.session import ORMExecuteState
log = logging.getLogger(__name__)


def is_query_api(orm_execute_state: ORMExecuteState) -> bool:
    return getattr(
        orm_execute_state.execution_options.get("_sa_orm_load_options", None),
        "_legacy_uniquing",
        False,
    )


class QueryAPIIteratorResult(IteratorResult):
    @property
    def _row_getter(self):
        return None


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
                res = option.handle(orm_execute_state)

                result_metadata = SimpleResultMetaData(
                    c.name
                    for c in orm_execute_state.statement.selected_columns  # type:ignore
                )

                log.info("Loaded objects from session")
                if not orm_execute_state.is_relationship_load and is_query_api(
                    orm_execute_state
                ):
                    return QueryAPIIteratorResult(result_metadata, res)
                return IteratorResult(result_metadata, map(lambda obj: (obj,), res))

    def receive_orm_execute(self, orm_execute_state: ORMExecuteState):
        if orm_execute_state.is_orm_statement and orm_execute_state.is_select:
            plugin_options: list[SessionLoadOption] = [
                option
                for option in orm_execute_state.user_defined_options
                if isinstance(option, SessionLoadOption)
            ]

            if plugin_options:
                return self.handle_select(orm_execute_state, plugin_options)
