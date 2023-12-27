from __future__ import annotations

import typing as t

import sqlalchemy.orm as sa_orm
from sqlalchemy import event

if t.TYPE_CHECKING:
    from sqlalchemy.orm.interfaces import UserDefinedOption
    from sqlalchemy.orm.session import ORMExecuteState


PLUGIN_OPTIONS: set[type[UserDefinedOption]] = set()


class SQLAlchemySessionLoad:
    def __init__(self, session_factory: t.Callable[[], sa_orm.Session]) -> None:
        event.listen(session_factory, "do_orm_execute", self.receive_orm_execute)

    def handle_select(
        self,
        orm_execute_state: ORMExecuteState,
        plugin_options: t.Sequence[UserDefinedOption],
    ):
        print(orm_execute_state.parameters)

    def receive_orm_execute(self, orm_execute_state: ORMExecuteState):
        if orm_execute_state.is_select:
            plugin_options: list[UserDefinedOption] = [
                option
                for option in orm_execute_state.user_defined_options
                if type(option) in PLUGIN_OPTIONS
                and isinstance(option, UserDefinedOption)
            ]

            return self.handle_select(orm_execute_state, plugin_options)
