import styled from "styled-components";

interface InputProps {
  readonly $isEditing: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f2f4;

  /* Matches the fixed Trello-style column width used across the board. */
  flex: 0 0 var(--board-column-width);
  width: var(--board-column-width);
  max-width: var(--board-column-width);
  min-width: var(--board-column-width);

  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(9, 30, 66, 0.18);
  padding: 8px;
  margin-right: 14px;
  margin-bottom: 14px;
`;

export const CardList = styled.div`
  min-height: 1px;
  padding: 0;
  margin-bottom: 8px;
`;

export const Header = styled.div`
  padding: 2px 0 8px;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 6px;
  min-width: 0;
`;

export const Title = styled.h2`
  flex: 1;
  min-width: 0;
  text-align: start;
  color: #172b4d;
  font-size: 15px;
  line-height: 20px;
  font-weight: 700;
  min-height: 20px;
  overflow-wrap: anywhere;
  padding: 6px 8px;
  margin: 0;
  white-space: pre-wrap;
`;

export const Input = styled.textarea<InputProps>`
  font-family: sans-serif;
  flex: 1;
  min-width: 0;
  width: 100%;
  color: #172b4d;

  /* Switches between display mode and editable input styling. */
  background: ${({ $isEditing }) => ($isEditing ? "#fff" : "transparent")};
  border: none;
  border-radius: 6px;
  box-shadow: ${({ $isEditing }) =>
    $isEditing ? "inset 0 0 0 2px #0079bf" : "none"};

  resize: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  min-height: 20px;
  overflow-wrap: anywhere;
  padding: 8px;
  margin: 0;
  display: block;
  transition: all 0.1s linear;

  &::placeholder {
    font-weight: 400;
    color: #5e6c84;
  }

  &:focus {
    outline: 2px solid #0079bf;
    outline-offset: 2px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  color: #5e6c84;
  background-color: transparent;
  border-radius: 6px;
  padding: 8px 10px;
  margin: 0;
  font-size: 14px;
  cursor: pointer;
  transition:
    background-color 120ms ease,
    color 120ms ease;

  &::before {
    content: "+";
    font-size: 18px;
    line-height: 18px;
    opacity: 0.82;
  }

  & > span {
    line-height: 20px;
    overflow-wrap: anywhere;
  }

  &:hover,
  &:focus {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }

  &:focus-visible {
    outline: 2px solid #0079bf;
    outline-offset: 2px;
  }
`;

/* Invisible overlay used to make the column title area clickable for editing. */
export const EditTitleButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 36px;
  margin: 0;
`;

export const DeleteButton = styled.button`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  justify-content: center;
  flex: 0 0 auto;
  position: relative;
  z-index: 1;
  width: 28px;
  height: 28px;
  color: #42526e;
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  opacity: 0.8;
  cursor: pointer;

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
