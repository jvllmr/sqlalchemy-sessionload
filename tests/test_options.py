from sqlalchemy_sessionload.options import SessionLoad
import sqlalchemy as sa
from .model import Message
from devtools import debug
import pytest
from pytest_benchmark.fixture import BenchmarkFixture


@pytest.mark.benchmark(group="basic-query")
def test_basic_load(db_session, benchmark):
    @benchmark
    def messages():
        stmt = sa.select(Message)
        return db_session.execute(stmt).all()

    assert len(messages) > 0


@pytest.mark.benchmark(group="basic-query")
def test_basic_load_with_option(db_session, benchmark: BenchmarkFixture):
    messages = db_session.execute(sa.select(Message)).all()

    @benchmark
    def loaded_messages():
        stmt = sa.select(Message).options(SessionLoad(Message))
        return db_session.execute(stmt).all()

    for message in messages:
        assert message in loaded_messages
