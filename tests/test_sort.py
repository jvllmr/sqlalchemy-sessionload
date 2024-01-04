import sqlalchemy.orm as sa_orm

from sqlalchemy_sessionload.options import SessionLoad

from .model import Message


def test_simple_order_by(db_session: sa_orm.Session):
    messages = db_session.query(Message).order_by(Message.message_id).all()
    loaded_messages = (
        db_session.query(Message)
        .options(SessionLoad(Message))
        .order_by(Message.message_id)
        .all()
    )

    assert len(loaded_messages) == len(messages)
    assert loaded_messages == messages
