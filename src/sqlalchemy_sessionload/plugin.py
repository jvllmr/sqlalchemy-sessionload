from __future__ import annotations

import typing as t

import sqlalchemy.orm as sa_orm
from sqlalchemy import event

from .options import SessionLoadOption
import logging

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
                res = option.handle(orm_execute_state)
                log.info(f"Loaded {len(res)} objects from session")
                return res

    def receive_orm_execute(self, orm_execute_state: ORMExecuteState):
        if orm_execute_state.is_select:
            plugin_options: list[SessionLoadOption] = [
                option
                for option in orm_execute_state.user_defined_options
                if isinstance(option, SessionLoadOption)
            ]

            if plugin_options:
                return self.handle_select(orm_execute_state, plugin_options)
