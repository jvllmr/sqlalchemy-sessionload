import os

import nox

os.environ.update({"PDM_IGNORE_SAVED_PYTHON": "1"})


@nox.session
def tests(session: nox.Session):
    session.run_always("pdm", "install", external=True)
    session.run("pytest")


@nox.session
def tests_20(session: nox.Session):
    session.run_always("pdm", "install", external=True)
    session.install("sqlalchemy>2.0")
    session.run("pytest")
    session.install("sqlalchemy<2.0")
