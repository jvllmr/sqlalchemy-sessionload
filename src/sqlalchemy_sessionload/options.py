from __future__ import annotations

import typing as t
from abc import ABCMeta, abstractmethod

from sqlalchemy.orm.interfaces import UserDefinedOption
from sqlalchemy.orm.session import ORMExecuteState

from .loaders import load_from_session, load_by_primary_key


class SessionLoadOption(UserDefinedOption, metaclass=ABCMeta):
    @abstractmethod
    def is_active(self, orm_execute_state: ORMExecuteState) -> bool:
        """
        Check if statement is the target of this Option instance
        """

    @abstractmethod
    def handle(self, orm_execute_state: ORMExecuteState) -> list:
        """
        Load from session and return instance objects
        """


class SessionLoad(SessionLoadOption):
    def __init__(
        self, mapped_class: type[t.Any], identity_token: t.Any | None = None
    ) -> None:
        self.mapped_class = mapped_class
        self.identity_token = identity_token

    def is_active(self, orm_execute_state: ORMExecuteState) -> bool:
        return (
            not orm_execute_state.is_relationship_load
            and not orm_execute_state.is_column_load
            and orm_execute_state.bind_mapper.class_ == self.mapped_class
        )

    def handle(self, orm_execute_state: ORMExecuteState) -> list:
        instance = load_by_primary_key(
            orm_execute_state.session,
            orm_execute_state.bind_mapper,
            orm_execute_state.statement,
            identity_token=self.identity_token,
        )
        if instance is not None:
            return [instance]

        return load_from_session(
            orm_execute_state.session,
            orm_execute_state.bind_mapper,
            orm_execute_state.statement,  # type: ignore
        )
