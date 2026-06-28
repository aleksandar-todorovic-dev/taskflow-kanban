// Represents a single task card inside a board column.
export interface Card {
  id: string;
  title: string;
}

// Represents one board column and the cards that belong to it.
export interface Column {
  id: string;
  title: string;

  // Each column owns a list of task cards.
  cards: Card[];
}
