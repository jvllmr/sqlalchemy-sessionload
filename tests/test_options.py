import pytest
import sqlalchemy as sa
import sqlalchemy.orm as sa_orm
from pytest_benchmark.fixture import BenchmarkFixture

from sqlalchemy_sessionload.options import SessionLoad, SessionRelationshipLoad

from .model import Chatroom, Message, User


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


@pytest.mark.benchmark(group="relationship-load")
def test_relationship_load(db_session: sa_orm.Session, benchmark: BenchmarkFixture):
    messages = db_session.execute(
        sa.select(Message).options(
            sa_orm.subqueryload(Message.chatroom),
            sa_orm.subqueryload(Message.chatroom, Chatroom.members),
            sa_orm.subqueryload(Message.user),
            sa_orm.subqueryload(Message.user, User.chat_rooms),
        )
    ).all()

    @benchmark
    def messages():
        stmt = sa.select(Message).options(
            sa_orm.subqueryload(Message.chatroom),
            sa_orm.subqueryload(Message.chatroom, Chatroom.members),
            sa_orm.subqueryload(Message.user),
            sa_orm.subqueryload(Message.user, User.chat_rooms),
        )
        return db_session.execute(stmt).all()

    assert len(messages) > 0


@pytest.mark.benchmark(group="relationship-load")
def test_realtionship_load_option(
    db_session: sa_orm.Session, benchmark: BenchmarkFixture
):
    messages = [
        row[0]
        for row in db_session.execute(
            sa.select(Message).options(
                sa_orm.subqueryload(Message.chatroom),
                sa_orm.subqueryload(Message.chatroom, Chatroom.members),
                sa_orm.subqueryload(Message.user),
                sa_orm.subqueryload(Message.user, User.chat_rooms),
            ),
        )
    ]

    @benchmark
    def loaded_messages():
        stmt = sa.select(Message).options(
            sa_orm.subqueryload(Message.chatroom),
            sa_orm.subqueryload(Message.chatroom, Chatroom.members),
            SessionRelationshipLoad(Message.chatroom, Chatroom.members),
            sa_orm.subqueryload(Message.user),
            sa_orm.subqueryload(Message.user, User.chat_rooms),
            SessionRelationshipLoad(Message.user, User.chat_rooms),
        )
        return [row[0] for row in db_session.execute(stmt)]

    messages = sorted(messages, key=lambda message: message.message_id)
    loaded_messages = sorted(loaded_messages, key=lambda message: message.message_id)
    assert len(loaded_messages) == len(messages)
    for message in messages:
        assert message in loaded_messages

    for message, loaded_message in zip(messages, loaded_messages):
        assert loaded_message == message

        assert loaded_message.chatroom == message.chatroom
        assert len(loaded_message.chatroom.members) == len(message.chatroom.members)
        for user in message.chatroom.members:
            assert user in loaded_message.chatroom.members

        assert loaded_message.user == message.user
        assert len(loaded_message.user.chat_rooms) == len(message.user.chat_rooms)
        for chatroom in message.user.chat_rooms:
            assert chatroom in loaded_message.user.chat_rooms
