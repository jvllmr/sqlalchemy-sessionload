from __future__ import annotations
import typing as t
from sqlalchemy.orm.interfaces import UserDefinedOption
from sqlalchemy.orm import Mapper, Session


class SessionLoadOption(UserDefinedOption):
    def handle(
        self, session: Session, mapper: Mapper, parameters: t.Mapping[str, t.Any]
    ):
        pass
