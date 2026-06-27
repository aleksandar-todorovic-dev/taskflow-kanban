import { useState } from "react";
import { DragDropContext, Droppable, type DropResult } from "@hello-pangea/dnd";

import AddColumnButton from "./components/AddColumnButton";
import Column, { NewColumn } from "./components/Column";
import { useBoard } from "./context";
import { Board, Header, List } from "./styles";

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
  const { columns } = useBoard();

  const onDragEnd = (result: DropResult) => {
    // Temporary placeholder until real column/card reorder logic is connected.
    console.log(result);
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
