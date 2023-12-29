from __future__ import annotations

import operator
import typing as t

import sqlalchemy as sa
from sqlalchemy.orm import Mapper, Session
from sqlalchemy.sql.annotation import AnnotatedColumn  # type: ignore
from sqlalchemy.sql.elements import (
    BinaryExpression,
    BindParameter,
    BooleanClauseList,
    ColumnElement,
)
from sqlalchemy.sql.selectable import Select


def iter_session_mapper_instances(session: Session, mapper: Mapper):
    for instance in session.identity_map.values():
        if isinstance(instance, mapper.class_):
            yield instance


def evaluate_expression(
    expr: BooleanClauseList | BinaryExpression | ColumnElement,
    mapper: Mapper,
) -> t.Callable[[t.Any], bool]:
    """
    Evaluate BinaryExpressions of a Select statement to create a filter function which is ready for higher order functions
    """
    if isinstance(expr, BooleanClauseList):
        eval_clauses = [evaluate_expression(clause, mapper) for clause in expr.clauses]
        if expr.operator is operator.and_:
            return lambda obj: all(clause(obj) for clause in eval_clauses)
        elif expr.operator is operator.or_:
            return lambda obj: any(clause(obj) for clause in eval_clauses)
    elif isinstance(expr, BinaryExpression):
        eval_left = evaluate_expression(expr.left, mapper)
        eval_right = evaluate_expression(expr.right, mapper)
        return lambda obj: expr.operator(eval_left(obj), eval_right(obj))
    elif isinstance(expr, AnnotatedColumn):
        # try to access attribute from instance
        return lambda obj: getattr(obj, expr.description)
    elif isinstance(expr, BindParameter):
        return lambda obj: expr.effective_value

    # better don't
    return lambda obj: False


def construct_filter_from_statement(
    mapper: Mapper, statement: Select
) -> t.Callable[[t.Any], bool]:
    """
    Evaluate where criteria expressions of a select statement and return a filter function
    """

    criteria_filters = [
        evaluate_expression(criteria, mapper)
        for criteria in statement._where_criteria  # type: ignore
    ]
    return lambda obj: all(filter_(obj) for filter_ in criteria_filters)


def load_by_primary_key(session: Session, mapper: Mapper, statement: Select):
    primary_key: sa.Column
    for primary_key in mapper.primary_key:
        pass


def load_from_session(session: Session, mapper: Mapper, statement: Select):
    filter_ = construct_filter_from_statement(mapper, statement)
    return [
        instance
        for instance in filter(
            filter_,
            iter_session_mapper_instances(session, mapper),
        )
    ]
