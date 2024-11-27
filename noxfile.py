import os

import nox

os.environ.update({"PDM_IGNORE_SAVED_PYTHON": "1"})


@nox.session
def tests(session: nox.Session):
    session.run_always("pdm", "install", "--frozen-lock", external=True)
    session.run("pytest", "--cov", "--cov-report=xml")
