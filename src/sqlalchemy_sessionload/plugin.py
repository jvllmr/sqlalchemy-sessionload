from __future__ import annotations

import typing as t

import sqlalchemy.orm as sa_orm
from sqlalchemy import event

from sqlalchemy_sessionload.loaders import load_from_session
from .options import SessionLoadOption

if t.TYPE_CHECKING:
    from sqlalchemy.orm.session import ORMExecuteState


class SQLAlchemySessionLoad:
    def __init__(self, session_factory: t.Callable[[], sa_orm.Session]) -> None:
        event.listen(session_factory, "do_orm_execute", self.receive_orm_execute)

    def handle_select(
        self,
        orm_execute_state: ORMExecuteState,
        plugin_options: t.Sequence[SessionLoadOption],
    ):
        instances = load_from_session(
            orm_execute_state.session,
            orm_execute_state.bind_mapper,
            orm_execute_state.statement,  # type: ignore
        )

    def receive_orm_execute(self, orm_execute_state: ORMExecuteState):
        if orm_execute_state.is_select:
            plugin_options: list[SessionLoadOption] = [
                option
                for option in orm_execute_state.user_defined_options
                if isinstance(option, SessionLoadOption)
            ]

            if plugin_options:
                return self.handle_select(orm_execute_state, plugin_options)
