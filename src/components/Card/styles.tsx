import styled from "styled-components";

interface InputProps {
  readonly isEditing?: boolean;
}

export const Container = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  margin-bottom: 8px;
  min-height: 20px;
  padding: 8px;
  color: #172b4d;
  cursor: pointer;

  &:hover {
    background-color: #f4f5f7;
  }
`;

export const Title = styled.div`
  color: #172b4d;
  font-size: 14px;
  line-height: 20px;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

export const Input = styled.textarea<InputProps>`
  font-family: sans-serif;
  width: 100%;
  min-height: 20px;
  color: #172b4d;

  /* Switches between read-like styling and active edit styling. */
  background-color: ${({ isEditing }) => (isEditing ? "#fff" : "transparent")};
  border: none;
  border-radius: 3px;
  box-shadow: ${({ isEditing }) =>
    isEditing ? "inset 0 0 0 2px #0079bf" : "none"};

  resize: none;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  padding: 0;
  display: block;
`;

/* Invisible overlay used to enter card title edit mode. */
export const EditTitleButton = styled.div`
  cursor: pointer;
  position: absolute;
  inset: 0;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  color: #42526e;
  background-color: transparent;
  padding: 4px;
  border-radius: 3px;
  opacity: 0;
  cursor: pointer;

  /* Reveal the delete button only when the card is hovered. */
  ${Container}:hover & {
    opacity: 0.8;
  }

  &:hover {
    opacity: 1;
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.08);
  }
`;
