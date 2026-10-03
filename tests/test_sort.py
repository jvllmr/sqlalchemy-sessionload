import pytest
import sqlalchemy.orm as sa_orm

from sqlalchemy_sessionload.options import SessionLoad
import sqlalchemy as sa
from .model import Message


@pytest.mark.parametrize(
    "expressions",
    [
        [Message.message_id],
        [Message.message_id.asc()],
        [Message.message_id.desc()],
        [Message.message_id.asc(), Message.user_id.desc(), Message.created_at.desc()],
    ],
    ids=lambda exprs: " ".join(str(expr) for expr in exprs),
)
def test_order_by_expressions(db_session: sa_orm.Session, expressions):
    messages = db_session.scalars(sa.select(Message).order_by(*expressions)).all()
    loaded_messages = (
        db_session.scalars(
            sa.select(Message).options(SessionLoad(Message)).order_by(*expressions)
        )
    ).all()

    assert len(loaded_messages) == len(messages)
    assert loaded_messages == messages, (
        loaded_messages[0].message_id,
        messages[0].message_id,
    )
