import { useEffect, useRef, useState } from "react";
import type { FC, KeyboardEvent, PropsWithChildren } from "react";
import { Draggable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

import TrashIcon from "../../assets/TrashIcon";
import { useBoard } from "../../context";
import { useClickOutside } from "../../hooks";

import type { CardProps, NewCardProps } from "./types";

import {
  Container,
  DeleteButton,
  EditTitleButton,
  Input,
  Title,
} from "./styles";

export const NewCard: FC<PropsWithChildren<NewCardProps>> = ({
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
        // Generate a unique card id and pass the final title back to the parent.
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
        placeholder="Add a title for this card..."
        rows={1}
        value={currentTitle}
        spellCheck={false}
        onChange={({ target }) => setCurrentTitle(target.value)}
        onKeyDown={onKeyDown}
      />
    </Container>
  );
};

const Card: FC<CardProps> = ({ id, columnId, title, currentIndex }) => {
  const { updateCard, deleteCard } = useBoard();

  const [currentTitle, setCurrentTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const ref = useRef<HTMLTextAreaElement>(null);

  useClickOutside(ref, () => {
    if (isEditing) {
      // Cancel editing and restore the original card title.
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
      // Keep the textarea height in sync with its content.
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [currentTitle]);

  const onKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();

      if (currentTitle.trim()) {
        setIsEditing(false);
        updateCard({ id, title: currentTitle.trim() }, columnId);
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
          {!isEditing && (
            <>
              <EditTitleButton onClick={() => setIsEditing(true)} />
              <Title>{title}</Title>
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

          <DeleteButton onClick={() => deleteCard(columnId, id)}>
            <TrashIcon />
          </DeleteButton>
        </Container>
      )}
    </Draggable>
  );
};

export default Card;
