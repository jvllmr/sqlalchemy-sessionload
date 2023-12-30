import pytest
import sqlalchemy as sa
import sqlalchemy.orm as sa_orm
from pytest_benchmark.fixture import BenchmarkFixture

from sqlalchemy_sessionload.options import SessionLoad

from .model import Message


@pytest.mark.benchmark(group="basic-query")
def test_basic_load(db_session: sa_orm.Session, benchmark: BenchmarkFixture):
    messages = db_session.execute(sa.select(Message)).all()

    @benchmark
    def messages():
        stmt = sa.select(Message)
        return db_session.execute(stmt).all()

    assert len(messages) > 0


@pytest.mark.benchmark(group="basic-query")
def test_basic_load_with_option(
    db_session: sa_orm.Session, benchmark: BenchmarkFixture
):
    messages = db_session.execute(sa.select(Message)).all()

    @benchmark
    def loaded_messages():
        stmt = sa.select(Message).options(SessionLoad(Message))
        return db_session.execute(stmt).all()

    for message in messages:
        assert message in loaded_messages


def test_basic_load_with_option_query(db_session: sa_orm.Session):
    messages = db_session.query(Message).all()

    loaded_messages = db_session.query(Message).options(SessionLoad(Message)).all()

    for message in messages:
        assert message in loaded_messages
