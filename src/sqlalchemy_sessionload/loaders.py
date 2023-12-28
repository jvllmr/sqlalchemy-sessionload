from sqlalchemy.orm import Mapper, Session
import typing as t
from sqlalchemy.sql.selectable import Select


def iter_session_mapper_instances(session: Session, mapper: Mapper):
    for instance in session.identity_map.values():
        if isinstance(instance, mapper.class_):
            yield instance


def load_from_session(session: Session, mapper: Mapper, statement: Select):
    print(type(statement))

    return []
