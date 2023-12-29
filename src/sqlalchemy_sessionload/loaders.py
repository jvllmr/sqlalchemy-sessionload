from __future__ import annotations

import sqlalchemy as sa
from sqlalchemy.orm import Mapper, Session
from sqlalchemy.sql.selectable import Select

from sqlalchemy_sessionload.filter import construct_filter_from_statement


def iter_session_mapper_instances(session: Session, mapper: Mapper):
    for instance in session.identity_map.values():
        if isinstance(instance, mapper.class_):
            yield instance


def load_by_primary_key(session: Session, mapper: Mapper, statement: Select):
    primary_key: sa.Column
    for primary_key in mapper.primary_key:
        pass


def load_from_session(session: Session, mapper: Mapper, statement: Select):
    filter_ = construct_filter_from_statement(statement, mapper=mapper)
    return [
        instance
        for instance in filter(
            filter_,
            iter_session_mapper_instances(session, mapper),
        )
    ]
