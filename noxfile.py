import os

import nox

os.environ.update({"PDM_IGNORE_SAVED_PYTHON": "1"})

lib_path = "src/sqlalchemy_sessionload"
coverage_path = "coverage"


@nox.session
def tests(session: nox.Session):
    session.run_always("pdm", "install", "--no-lock", external=True)
    session.run(
        "pytest", f"--cov={lib_path}", f"--cov-report=xml:{coverage_path}/coverage.xml"
    )


@nox.session
def tests_20(session: nox.Session):
    session.run_always("pdm", "install", "--no-lock", external=True)
    session.install("sqlalchemy>2.0")
    session.run(
        "pytest",
        f"--cov={lib_path}",
        f"--cov-report=xml:{coverage_path}/coverage_20.xml",
    )
