from __future__ import annotations

import operator
import typing as t


from sqlalchemy.sql.annotation import AnnotatedColumn  # type: ignore
from sqlalchemy.sql.elements import (
    BinaryExpression,
    BindParameter,
    UnaryExpression,
    BooleanClauseList,
    ColumnElement,
    Grouping,
)
from sqlalchemy.sql.selectable import Select

TSupportedExprs = t.Union[
    BooleanClauseList, BinaryExpression, ColumnElement, UnaryExpression, Grouping
]


def evaluate_expression(expr: TSupportedExprs, **kw) -> t.Callable[[t.Any], bool]:
    """
    Evaluate BinaryExpressions of a Select statement to create a filter function which is ready for higher order functions
    """

    if isinstance(expr, BooleanClauseList):
        eval_clauses = [evaluate_expression(clause, **kw) for clause in expr.clauses]
        if expr.operator is operator.and_:
            return lambda obj: all(clause(obj) for clause in eval_clauses)
        elif expr.operator is operator.or_:
            return lambda obj: any(clause(obj) for clause in eval_clauses)
    elif isinstance(expr, BinaryExpression):
        eval_left = evaluate_expression(expr.left, **kw)
        eval_right = evaluate_expression(expr.right, **kw)
        return lambda obj: expr.operator(eval_left(obj), eval_right(obj))
    elif isinstance(expr, UnaryExpression):
        eval_expr = evaluate_expression(expr.element, **kw)
        op = expr.operator
        if op is operator.inv:
            op = lambda value: not value  # noqa: E731

        return lambda obj: op(eval_expr(obj))
    elif isinstance(expr, Grouping):
        eval_expr = evaluate_expression(expr.element)
        return lambda obj: eval_expr(obj)
    elif isinstance(expr, AnnotatedColumn):
        # try to access attribute from instance
        return lambda obj: getattr(obj, expr.description)
    elif isinstance(expr, BindParameter):
        return lambda obj: expr.effective_value

    raise TypeError(f"Don't know how to evaluate expression of type {type(expr)}")


def construct_filter_from_statement(
    statement: Select, **kw
) -> t.Callable[[t.Any], bool]:
    """
    Evaluate where criteria expressions of a select statement and return a filter function
    """

    criteria_filters = [
        evaluate_expression(criteria, **kw)
        for criteria in statement._where_criteria  # type: ignore
    ]
    return lambda obj: all(filter_(obj) for filter_ in criteria_filters)
