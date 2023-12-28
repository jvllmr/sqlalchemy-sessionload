from __future__ import annotations
import sqlalchemy as sa
from sqlalchemy.orm import Mapper, Session
from sqlalchemy.sql.selectable import Select
import typing as t
from sqlalchemy.sql.elements import ColumnElement


def iter_session_mapper_instances(session: Session, mapper: Mapper):
    for instance in session.identity_map.values():
        if isinstance(instance, mapper.class_):
            yield instance


def construct_filter_from_statement(mapper: Mapper, statement: Select):
    """
    Evaluate BinaryExpressions of a Select statement to create a filter function ready for higher order functions
    """
    res = lambda obj: True  # noqa: E731

    return res


def load_by_primary_key(session: Session, mapper: Mapper, statement: Select):
    primary_key: sa.Column
    for primary_key in mapper.primary_key:
        pass


def load_from_session(session: Session, mapper: Mapper, statement: Select):
    return [
        instance
        for instance in filter(
            construct_filter_from_statement(mapper, statement),
            iter_session_mapper_instances(session, mapper),
        )
    ]
