import type { Card as CardInterface } from "../../types";

export interface ColumnProps {
  id: string;
  title: string;
  cards: CardInterface[];

  // Position of this column inside the board, used by drag-and-drop.
  currentIndex: number;
}

export interface NewColumnProps {
  // Called when a new column is successfully created.
  onSuccess: (id: string, title: string) => void;

  // Called when the new column form should be closed/cancelled.
  onDismiss: () => void;
}
