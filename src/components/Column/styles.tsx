import styled from "styled-components";

interface InputProps {
  readonly $isEditing: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ebecf0;

  /* Matches the fixed Trello-style column width used across the board. */
  width: 272px;
  max-width: 272px;
  min-width: 272px;

  border-radius: 3px;
  padding: 0 4px 8px;
  margin-right: 12px;
  margin-bottom: 12px;
`;

export const CardList = styled.div`
  min-height: 1px;
  padding: 0 4px;
  margin-bottom: 4px;
`;

export const Header = styled.div`
  padding: 8px 4px;
  position: relative;
  display: flex;
`;

export const Title = styled.h2`
  text-align: start;
  color: #172b4d;
  font-size: 20px;
  text-transform: uppercase;
  line-height: 20px;
  font-weight: 600;
  min-height: 20px;
  padding: 8px;
  margin: 0;
`;

export const Input = styled.textarea<InputProps>`
  font-family: sans-serif;
  width: 100%;
  color: #172b4d;

  /* Switches between display mode and editable input styling. */
  background: ${({ $isEditing }) => ($isEditing ? "#fff" : "transparent")};
  border: none;
  border-radius: 3px;
  box-shadow: ${({ $isEditing }) =>
    $isEditing ? "inset 0 0 0 2px #0079bf" : "none"};

  resize: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  min-height: 20px;
  padding: 8px;
  margin: 0;
  display: block;
  transition: all 0.1s linear;

  &::placeholder {
    font-weight: 400;
    color: #5e6c84;
  }

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  color: #5e6c84;
  background-color: transparent;
  border-radius: 3px;
  padding: 4px 8px;
  margin: 0 4px;
  font-size: 14px;
  cursor: pointer;

  & > span {
    line-height: 20px;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }
`;

/* Invisible overlay used to make the column title area clickable for editing. */
export const EditTitleButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 4px;
`;

export const DeleteButton = styled.button`
  align-self: flex-start;
  position: relative;
  color: #42526e;
  background-color: transparent;
  padding: 4px;
  border-radius: 3px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.08);
  }
`;
