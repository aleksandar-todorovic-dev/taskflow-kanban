import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { Card, Column } from "../types";

export interface BoardContextValue {
  columns: Column[];
  setColumns: Dispatch<SetStateAction<Column[]>>;
  addColumn: (id: string, title: string) => void;
  updateColumn: (id: string, title: string) => void;
  deleteColumn: (id: string) => void;
  addCard: (newCard: Card, columnId: string) => void;
  updateCard: (newCard: Card, columnId: string) => void;
  deleteCard: (columnId: string, cardId: string) => void;
}

export const BoardContext = createContext<BoardContextValue | undefined>(
  undefined,
);
