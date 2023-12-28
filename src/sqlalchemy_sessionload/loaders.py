import sqlalchemy as sa
from sqlalchemy.orm import Mapper, Session
from sqlalchemy.sql.selectable import Select


def iter_session_mapper_instances(session: Session, mapper: Mapper):
    for instance in session.identity_map.values():
        if isinstance(instance, mapper.class_):
            yield instance


def whereclause_map(statement: Select):
    pass


def construct_filter_from_statement(mapper: Mapper, statement: Select):
    pass


def load_by_primary_key(session: Session, mapper: Mapper, statement: Select):
    primary_key: sa.Column
    for primary_key in mapper.primary_key:
        pass


def load_from_session(session: Session, mapper: Mapper, statement: Select):
    return [instance for instance in iter_session_mapper_instances(session, mapper)]
