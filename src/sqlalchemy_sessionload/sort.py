from __future__ import annotations

import typing as t

import sqlalchemy as sa
from sqlalchemy.sql.roles import OrderByRole
from sqlalchemy.sql.selectable import Select


def evaluate_order_by_clause(clause: OrderByRole) -> t.Callable[[t.Any], t.Any]:
    if isinstance(clause, sa.Column):
        return lambda obj: getattr(obj, clause.name)

    raise TypeError(f"Cannot evaluate in {type(clause)} order_by expression")


def construct_sort_key(
    statement: Select,
):
    sort_keys = tuple(
        evaluate_order_by_clause(clause) for clause in statement._order_by_clauses  # type: ignore
    )
    return lambda obj: tuple(sort_key(obj) for sort_key in sort_keys)


_T = t.TypeVar("_T")


def sort_with_statement(statement: Select, objects: t.Iterable[_T]) -> list[_T]:
    sort_key = construct_sort_key(statement)
    return sorted(objects, key=sort_key)


def maybe_apply_sort(
    statement: Select, objects: t.Iterable[_T]
) -> list[_T] | t.Iterable[_T]:
    if statement._order_by_clauses:  # type: ignore
        return sort_with_statement(statement, objects)
    return objects
