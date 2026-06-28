import type { Card, Column } from "../types";

export function updateColumnById(
  columns: Column[],

  // Only the column metadata is needed here.
  // Cards are intentionally excluded because this function updates the column title only.
  updatedColumn: Omit<Column, "cards">,
) {
  return columns.map((column) =>
    column.id === updatedColumn.id
      ? { ...column, title: updatedColumn.title }
      : column,
  );
}

export function addCardToColumn(
  columns: Column[],
  columnId: string,
  newCard: Card,
) {
  return columns.map((column) =>
    column.id === columnId
      ? {
          ...column,

          // Creates a new cards array instead of mutating the existing column.
          cards: [...column.cards, newCard],
        }
      : column,
  );
}

export function deleteColumnById(columns: Column[], columnId: string) {
  // Removes the matching column and keeps all others unchanged.
  return columns.filter((column) => column.id !== columnId);
}

export function updateCardById(
  columns: Column[],
  columnId: string,
  newCard: Card,
) {
  return columns.map((column) =>
    column.id === columnId
      ? {
          ...column,

          // Replaces only the matching card inside the selected column.
          cards: column.cards.map((card) =>
            card.id === newCard.id ? newCard : card,
          ),
        }
      : column,
  );
}

export function deleteCardById(
  columns: Column[],
  columnId: string,
  cardId: string,
) {
  return columns.map((column) =>
    column.id === columnId
      ? {
          ...column,

          // Removes the matching card from the selected column.
          cards: column.cards.filter((card) => card.id !== cardId),
        }
      : column,
  );
}

export function reorderList<T>(
  list: T[],
  startIndex: number,
  endIndex: number,
) {
  // Creates a shallow copy so the original list is not mutated.
  const result = Array.from(list);

  // Removes one item from its original position.
  const [removed] = result.splice(startIndex, 1);

  // Inserts the removed item into its new position.
  result.splice(endIndex, 0, removed);

  return result;
}

export function switchCards(
  columns: Column[],
  sourceColumnIndex: number,
  sourceCardIndex: number,
  destinationColumnIndex: number,
  destinationCardIndex: number,
) {
  // Copy the moved card before changing any column arrays.
  const card = { ...columns[sourceColumnIndex].cards[sourceCardIndex] };

  if (sourceColumnIndex === destinationColumnIndex) {
    return columns.map((column, index) =>
      index === sourceColumnIndex
        ? {
            ...column,

            // Reorder cards inside the same column.
            cards: reorderList<Card>(
              column.cards,
              sourceCardIndex,
              destinationCardIndex,
            ),
          }
        : column,
    );
  }

  return columns.map((column, index) => {
    if (index === sourceColumnIndex) {
      return {
        ...column,

        // Remove the moved card from its original column.
        cards: column.cards.filter(
          (_, cardIndex) => cardIndex !== sourceCardIndex,
        ),
      };
    }

    if (index === destinationColumnIndex) {
      const temp = [...column.cards];

      // Insert the moved card into the destination column at the drop position.
      temp.splice(destinationCardIndex, 0, card);

      return {
        ...column,
        cards: temp,
      };
    }

    return column;
  });
}
