import React, { useCallback, useMemo } from "react";
import type { PropsWithChildren } from "react";

import type { Card, Column } from "../types";
import useLocalStorage from "../hooks/UseLocalStorage";

import {
  addCardToColumn,
  deleteCardById,
  deleteColumnById,
  updateCardById,
  updateColumnById,
} from "../utils/listUtils";

import { BoardContext } from "./BoardContext";

const isCard = (value: unknown): value is Card => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const card = value as Partial<Card>;

  return typeof card.id === "string" && typeof card.title === "string";
};

const isColumn = (value: unknown): value is Column => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const column = value as Partial<Column>;

  return (
    typeof column.id === "string" &&
    typeof column.title === "string" &&
    Array.isArray(column.cards) &&
    column.cards.every(isCard)
  );
};

const isColumnArray = (value: unknown): value is Column[] => {
  return Array.isArray(value) && value.every(isColumn);
};

const BoardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // Board state is persisted in localStorage so columns and cards survive page refreshes.
  const [columns, setColumns] = useLocalStorage<Column[]>(
    "board",
    [],
    isColumnArray,
  );

  const addColumn = useCallback(
    (id: string, title: string) => {
      setColumns((previousColumns) => [
        ...previousColumns,
        { id, title, cards: [] },
      ]);
    },
    [setColumns],
  );

  const updateColumn = useCallback(
    (id: string, title: string) => {
      setColumns((previousColumns) =>
        updateColumnById(previousColumns, { id, title }),
      );
    },
    [setColumns],
  );

  const deleteColumn = useCallback(
    (id: string) => {
      setColumns((previousColumns) => deleteColumnById(previousColumns, id));
    },
    [setColumns],
  );

  const addCard = useCallback(
    (newCard: Card, columnId: string) => {
      setColumns((previousColumns) =>
        addCardToColumn(previousColumns, columnId, newCard),
      );
    },
    [setColumns],
  );

  const updateCard = useCallback(
    (newCard: Card, columnId: string) => {
      setColumns((previousColumns) =>
        updateCardById(previousColumns, columnId, newCard),
      );
    },
    [setColumns],
  );

  const deleteCard = useCallback(
    (columnId: string, cardId: string) => {
      setColumns((previousColumns) =>
        deleteCardById(previousColumns, columnId, cardId),
      );
    },
    [setColumns],
  );

  // Memoizes the context value to avoid recreating the object on every render.
  const value = useMemo(
    () => ({
      columns,
      setColumns,
      addColumn,
      updateColumn,
      deleteColumn,
      addCard,
      updateCard,
      deleteCard,
    }),
    [
      columns,
      setColumns,
      addColumn,
      updateColumn,
      deleteColumn,
      addCard,
      updateCard,
      deleteCard,
    ],
  );

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardProvider;
