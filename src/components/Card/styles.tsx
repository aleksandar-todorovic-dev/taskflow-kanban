import styled from "styled-components";

interface InputProps {
  readonly $isEditing?: boolean;
}

export const Container = styled.div`
  position: relative;
  display: block;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(9, 30, 66, 0.24);
  margin-bottom: 8px;
  min-height: 20px;
  padding: 10px 38px 10px 10px;
  color: #172b4d;
  cursor: pointer;
  transition:
    background-color 120ms ease,
    box-shadow 120ms ease,
    transform 120ms ease;

  &:hover {
    background-color: #fafbfc;
    box-shadow: 0 3px 8px rgba(9, 30, 66, 0.22);
  }
`;

export const Title = styled.div`
  color: #172b4d;
  font-size: 14px;
  line-height: 20px;
  overflow-wrap: anywhere;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Input = styled.textarea<InputProps>`
  font-family: sans-serif;
  min-width: 0;
  width: 100%;
  min-height: 20px;
  color: #172b4d;

  /* Switches between read-like styling and active edit styling. */
  background-color: ${({ $isEditing }) =>
    $isEditing ? "#fff" : "transparent"};
  border: none;
  border-radius: 3px;
  box-shadow: ${({ $isEditing }) =>
    $isEditing ? "inset 0 0 0 2px #0079bf" : "none"};

  resize: none;
  font-size: 14px;
  line-height: 20px;
  overflow-wrap: anywhere;
  padding: 0;
  display: block;

  &:focus {
    outline: 2px solid #0079bf;
    outline-offset: 2px;
  }
`;

/* Invisible overlay used to enter card title edit mode. */
export const EditTitleButton = styled.div`
  cursor: pointer;
  position: absolute;
  inset: 0;
`;

export const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  color: #42526e;
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  opacity: 0;
  cursor: pointer;

  /* Reveal the delete button only when the card is hovered. */
  ${Container}:hover &,
  &:focus-visible {
    opacity: 0.8;
  }

  &:hover {
    opacity: 1;
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #0079bf;
    outline-offset: 2px;
  }
`;
