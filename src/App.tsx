import { useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";

import AddColumnButton from "./components/AddColumnButton";
import Column, { NewColumn } from "./components/Column";
import { useBoard } from "./context";
import { createDemoBoard } from "./demoBoard";
import {
  Board,
  EmptyState,
  EmptyStateText,
  EmptyStateTitle,
  Header,
  HeaderActionHint,
  HeaderActions,
  HeaderBrand,
  HeaderBrandText,
  HeaderButton,
  HeaderButtonRow,
  HeaderContent,
  HeaderEyebrow,
  HeaderLogoMark,
  HeaderStats,
  HeaderSubtitle,
  HeaderTitle,
  List,
  SavedIndicator,
  Stat,
} from "./styles";
import { reorderList, switchCards } from "./utils/listUtils";

const AddNewColumn = () => {
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const { columns, addColumn } = useBoard();

  if (isAddingColumn) {
    return (
      <NewColumn
        onSuccess={(id, title) => {
          addColumn(id, title);
          setIsAddingColumn(false);
        }}
        onDismiss={() => setIsAddingColumn(false)}
      />
    );
  }

  return (
    <AddColumnButton
      isFirst={columns.length === 0}
      onClick={() => setIsAddingColumn(true)}
    />
  );
};

function App() {
  const { columns, setColumns } = useBoard();
  const totalCards = columns.reduce(
    (cardCount, column) => cardCount + column.cards.length,
    0,
  );
  const hasDoneCards = columns.some(
    (column) =>
      column.title.trim().toLowerCase() === "done" && column.cards.length > 0,
  );

  const listLabel = columns.length === 1 ? "list" : "lists";
  const cardLabel = totalCards === 1 ? "card" : "cards";
  const clearDoneDescription = "Clears cards from the Done list.";
  const clearDoneTitle = hasDoneCards
    ? clearDoneDescription
    : "No cards in the Done list to clear.";

  const clearDoneCards = () => {
    setColumns((previousColumns) =>
      previousColumns.map((column) =>
        column.title.trim().toLowerCase() === "done"
          ? { ...column, cards: [] }
          : column,
      ),
    );
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination, type } = result;

    // No destination means the item was dropped outside a valid droppable area.
    if (!destination) {
      return;
    }

    const isSamePosition =
      source.droppableId === destination.droppableId &&
      source.index === destination.index;

    // Ignore drops that do not actually change the item's position.
    if (isSamePosition) {
      return;
    }

    if (type === "column") {
      // Reorder columns horizontally on the board.
      setColumns(reorderList(columns, source.index, destination.index));
      return;
    }

    const sourceColumnIndex = columns.findIndex(
      (column) => column.id === source.droppableId,
    );

    const destinationColumnIndex = columns.findIndex(
      (column) => column.id === destination.droppableId,
    );

    // Guard against invalid drag data before updating board state.
    if (sourceColumnIndex === -1 || destinationColumnIndex === -1) {
      return;
    }

    // Move a card either within the same column or between different columns.
    setColumns(
      switchCards(
        columns,
        sourceColumnIndex,
        source.index,
        destinationColumnIndex,
        destination.index,
      ),
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header>
        <HeaderContent>
          <HeaderBrand>
            <HeaderLogoMark aria-hidden="true" />
            <HeaderBrandText>
              <HeaderEyebrow>Local Kanban workspace</HeaderEyebrow>
              <HeaderTitle>TaskFlow</HeaderTitle>
              <HeaderSubtitle>
                Plan, prioritize, and move work through a focused board.
              </HeaderSubtitle>
            </HeaderBrandText>
          </HeaderBrand>

          <HeaderStats aria-label="Board summary">
            <Stat>
              <strong>{columns.length}</strong>
              <span>{listLabel}</span>
            </Stat>
            <Stat>
              <strong>{totalCards}</strong>
              <span>{cardLabel}</span>
            </Stat>
            <SavedIndicator>Saved locally</SavedIndicator>
          </HeaderStats>
        </HeaderContent>

        <HeaderActions>
          <HeaderButtonRow>
            <HeaderButton
              type="button"
              onClick={() => setColumns(createDemoBoard())}
            >
              Load demo board
            </HeaderButton>
            <HeaderButton
              type="button"
              $variant="secondary"
              aria-label={clearDoneTitle}
              title={clearDoneTitle}
              disabled={!hasDoneCards}
              onClick={clearDoneCards}
            >
              Clear done
            </HeaderButton>
            <HeaderButton
              type="button"
              $variant="danger"
              onClick={() => setColumns([])}
            >
              Reset board
            </HeaderButton>
          </HeaderButtonRow>
          <HeaderActionHint>Clears cards from the Done list.</HeaderActionHint>
        </HeaderActions>
      </Header>

      <Board>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
              {columns.map((column, index) => (
                <Column
                  key={column.id}
                  id={column.id}
                  title={column.title}
                  cards={column.cards}
                  currentIndex={index}
                />
              ))}

              {provided.placeholder}
            </List>
          )}
        </Droppable>

        {columns.length === 0 && (
          <EmptyState>
            <EmptyStateTitle>Build your first workflow</EmptyStateTitle>
            <EmptyStateText>
              Create a first list below, or load the demo board to explore a
              ready-made workflow.
            </EmptyStateText>
          </EmptyState>
        )}

        <AddNewColumn />
      </Board>
    </DragDropContext>
  );
}

export default App;
