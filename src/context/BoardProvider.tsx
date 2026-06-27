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

const BoardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [columns, setColumns] = useLocalStorage<Column[]>("board", []);

  const addColumn = useCallback(
    (id: string, title: string) => {
      setColumns([...columns, { id, title, cards: [] }]);
    },
    [columns, setColumns],
  );

  const updateColumn = useCallback(
    (id: string, title: string) => {
      setColumns(updateColumnById(columns, { id, title }));
    },
    [columns, setColumns],
  );

  const deleteColumn = useCallback(
    (id: string) => {
      setColumns(deleteColumnById(columns, id));
    },
    [columns, setColumns],
  );

  const addCard = useCallback(
    (newCard: Card, columnId: string) => {
      setColumns(addCardToColumn(columns, columnId, newCard));
    },
    [columns, setColumns],
  );

  const updateCard = useCallback(
    (newCard: Card, columnId: string) => {
      setColumns(updateCardById(columns, columnId, newCard));
    },
    [columns, setColumns],
  );

  const deleteCard = useCallback(
    (columnId: string, cardId: string) => {
      setColumns(deleteCardById(columns, columnId, cardId));
    },
    [columns, setColumns],
  );

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
