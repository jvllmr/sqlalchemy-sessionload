import pytest
from .model import metadata
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

engine = create_engine("sqlite:///:memory:", future=True)
Session = sessionmaker(engine)


@pytest.fixture()
def db_session():
    with Session() as session:
        yield session


@pytest.fixture(autouse=True, scope="session")
def generate_testdata():
    metadata.create_all(engine)
    with Session() as session:
        session.commit()
