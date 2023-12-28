from __future__ import annotations
import typing as t
from sqlalchemy.orm.session import ORMExecuteState
from sqlalchemy.orm.interfaces import UserDefinedOption
from sqlalchemy.orm import Mapper, Session
from abc import abstractmethod, ABCMeta


class SessionLoadOption(UserDefinedOption, metaclass=ABCMeta):
    @abstractmethod
    def active(self, orm_execute_state: ORMExecuteState) -> bool:
        """
        Check if statement is the target of this Option instance
        """

    @abstractmethod
    def handle(self, orm_execute_state: ORMExecuteState) -> list:
        """
        Load from session and return instance objects
        """


class SessionLoad(SessionLoadOption):
    pass
