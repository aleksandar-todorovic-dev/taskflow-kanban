import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

import type { Card, Column } from "../types";

export interface BoardContextValue {
  // Current board state shared across board-related components.
  columns: Column[];

  // Exposes the raw state setter for cases where full column updates are needed.
  setColumns: Dispatch<SetStateAction<Column[]>>;

  // Column actions.
  addColumn: (id: string, title: string) => void;
  updateColumn: (id: string, title: string) => void;
  deleteColumn: (id: string) => void;

  // Card actions.
  addCard: (newCard: Card, columnId: string) => void;
  updateCard: (newCard: Card, columnId: string) => void;
  deleteCard: (columnId: string, cardId: string) => void;
}

// Context starts as undefined so consumers can detect missing provider usage.
export const BoardContext = createContext<BoardContextValue | undefined>(
  undefined,
);
