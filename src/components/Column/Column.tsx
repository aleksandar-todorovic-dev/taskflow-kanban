import { useEffect, useRef, useState } from "react";
import type { FC, KeyboardEvent, PropsWithChildren } from "react";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

import TrashIcon from "../../assets/TrashIcon";
import { useBoard } from "../../context";
import { useClickOutside } from "../../hooks";
import Card, { NewCard } from "../Card";

import type { ColumnProps, NewColumnProps } from "./types";

import {
  Button,
  CardList,
  CardCount,
  Container,
  DeleteButton,
  EditTitleButton,
  Header,
  Input,
  Title,
} from "./styles";

export const NewColumn: FC<PropsWithChildren<NewColumnProps>> = ({
  onSuccess,
  onDismiss,
}) => {
  const [currentTitle, setCurrentTitle] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useClickOutside(ref, () => {
    onDismiss();
  });

  useEffect(() => {
    if (ref.current) {
      // Auto-resize the textarea as the user types.
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [currentTitle]);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (currentTitle.trim()) {
        // Generate a unique column id and pass the final title back to the parent.
        onSuccess(uuidv4(), currentTitle.trim());
      }
    }

    if (event.key === "Escape") {
      setCurrentTitle("");
      onDismiss();
    }
  };

  return (
    <Container>
      <Input
        autoFocus
        ref={ref}
        $isEditing
        placeholder="Add list title..."
        rows={1}
        value={currentTitle}
        spellCheck={false}
        onChange={({ target }) => setCurrentTitle(target.value)}
        onKeyDown={onKeyDown}
      />
    </Container>
  );
};

const Column: FC<ColumnProps> = ({ id, title, cards, currentIndex }) => {
  const { updateColumn, deleteColumn, addCard } = useBoard();

  const [currentTitle, setCurrentTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const [isAddingCard, setIsAddingCard] = useState(false);

  const ref = useRef<HTMLTextAreaElement>(null);

  useClickOutside(ref, () => {
    if (isEditing) {
      // Cancel title editing and restore the original column title.
      setCurrentTitle(title);
      setIsEditing(false);
    }
  });

  useEffect(() => {
    if (isEditing) {
      // Focus and select the current title when edit mode starts.
      ref.current?.focus();
      ref.current?.select();
    }
  }, [isEditing]);

  useEffect(() => {
    if (ref.current) {
      // Keep the title textarea height in sync with its content.
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [currentTitle]);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (currentTitle.trim()) {
        setIsEditing(false);
        updateColumn(id, currentTitle.trim());
      }
    }

    if (event.key === "Escape") {
      setCurrentTitle(title);
      setIsEditing(false);
    }
  };

  return (
    <Draggable draggableId={id} index={currentIndex}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Header>
            {!isEditing && (
              <>
                <Title>{title}</Title>
                <CardCount aria-label={`${cards.length} cards`}>
                  {cards.length}
                </CardCount>
                <EditTitleButton onClick={() => setIsEditing(true)} />
              </>
            )}

            {isEditing && (
              <Input
                ref={ref}
                $isEditing
                rows={1}
                value={currentTitle}
                spellCheck={false}
                onChange={({ target }) => setCurrentTitle(target.value)}
                onKeyDown={onKeyDown}
              />
            )}

            <DeleteButton
              type="button"
              aria-label={`Delete column ${title}`}
              onClick={() => deleteColumn(id)}
            >
              <TrashIcon />
            </DeleteButton>
          </Header>

          <Droppable droppableId={id} type="card">
            {(droppableProvided) => (
              <CardList
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
              >
                {cards.map((card, index) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    columnId={id}
                    title={card.title}
                    currentIndex={index}
                  />
                ))}

                {droppableProvided.placeholder}
              </CardList>
            )}
          </Droppable>

          {isAddingCard ? (
            <NewCard
              onSuccess={(cardId, cardTitle) => {
                addCard({ id: cardId, title: cardTitle }, id);
                setIsAddingCard(false);
              }}
              onDismiss={() => setIsAddingCard(false)}
            />
          ) : (
            <Button type="button" onClick={() => setIsAddingCard(true)}>
              <span>Add a card</span>
            </Button>
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default Column;
