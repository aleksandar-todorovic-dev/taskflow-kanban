import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";

import AddColumnButton from "./components/AddColumnButton";
import { useBoard } from "./context";
import { Board, Header, List } from "./styles";

const AddNewColumn = () => {
  const [isAddingColumn, setIsAddingColumn] = useState(false);
  const { columns } = useBoard();

  if (isAddingColumn) {
    return <div>Column form coming soon...</div>;
  }

  return (
    <AddColumnButton
      isFirst={columns.length === 0}
      onClick={() => setIsAddingColumn(true)}
    />
  );
};

function App() {
  const onDragEnd = (result: DropResult) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Header />

      <Board>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <List ref={provided.innerRef} {...provided.droppableProps}>
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