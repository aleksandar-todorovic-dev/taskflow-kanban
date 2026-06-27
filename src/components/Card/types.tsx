export interface CardProps {
  id: string;
  columnId: string;
  title: string;

  // Position of this card inside its column, used by drag-and-drop.
  currentIndex: number;
}

export interface NewCardProps {
  // Called when a new card is successfully created.
  onSuccess: (id: string, title: string) => void;

  // Called when the new card form should be closed/cancelled.
  onDismiss: () => void;
}
