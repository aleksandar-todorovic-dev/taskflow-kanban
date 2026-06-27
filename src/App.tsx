import { useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";

import AddColumnButton from "./components/AddColumnButton";
import Column, { NewColumn } from "./components/Column";
import { useBoard } from "./context";
import { Board, Header, List } from "./styles";
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
      <Header />

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

        <AddNewColumn />
      </Board>
    </DragDropContext>
  );
}

export default App;
