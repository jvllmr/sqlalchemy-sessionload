from sqlalchemy_sessionload.options import SessionLoad
import sqlalchemy as sa
from .model import Message
from devtools import debug


def test_basic_load_benchmark(db_session, benchmark):
    messages = benchmark(db_session.query(Message).all)
    assert len(messages) > 0


def test_basic_load(db_session, benchmark):
    messages = db_session.query(Message).all()
    debug(db_session.execute(sa.select(Message)))
    loaded_messages = benchmark(
        db_session.query(Message).options(SessionLoad(Message)).all
    )
    assert messages == loaded_messages
