from sqlalchemy_sessionload.loaders import (
    iter_session_mapper_instances,
    load_from_session,
)
from sqlalchemy_sessionload.options import SessionLoadOption
from .model import Message
import sqlalchemy.orm as sa_orm
import sqlalchemy as sa

message_mapper = Message.__mapper__


def test_iter_session_mapper_instances(db_session: sa_orm.Session):
    messages = db_session.query(Message).all()

    iter_values = list(iter_session_mapper_instances(db_session, message_mapper))

    for message in messages:
        assert message in iter_values


def test_basic_load_from_session(db_session: sa_orm.Session):
    messages = db_session.query(Message).options(SessionLoadOption()).all()
    loaded_messages = load_from_session(db_session, message_mapper, sa.select(Message))
    for message in messages:
        assert message in loaded_messages
