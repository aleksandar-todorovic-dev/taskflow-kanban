import styled from "styled-components";

interface InputProps {
  readonly $isEditing: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background:
    linear-gradient(180deg, #ffffff 0%, #f8fafc 52%, #f1f5f9 100%),
    #f8fafc;
  position: relative;
  overflow: hidden;

  /* Matches the fixed Trello-style column width used across the board. */
  flex: 0 0 var(--board-column-width);
  width: var(--board-column-width);
  max-width: var(--board-column-width);
  min-width: var(--board-column-width);

  border: 1px solid #cfdae8;
  border-radius: 16px;
  box-shadow:
    0 18px 38px rgba(15, 23, 42, 0.09),
    inset 0 1px 0 rgba(255, 255, 255, 0.82);
  padding: 12px;
  margin-right: 16px;
  margin-bottom: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #4f46e5, #0ea5e9);
  }
`;

export const CardList = styled.div`
  min-height: 1px;
  padding: 0;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  padding: 2px 0 12px;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 9px;
  min-width: 0;
`;

export const Title = styled.h2`
  flex: 1;
  min-width: 0;
  text-align: start;
  color: #172033;
  font-size: 15px;
  line-height: 21px;
  font-weight: 800;
  min-height: 20px;
  overflow-wrap: anywhere;
  padding: 7px 0 7px 2px;
  margin: 0;
  white-space: pre-wrap;
`;

export const CardCount = styled.span`
  align-self: flex-start;
  background-color: #eef6ff;
  border: 1px solid #c7ddff;
  border-radius: 999px;
  color: #1d4ed8;
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 800;
  line-height: 16px;
  margin-top: 6px;
  min-width: 26px;
  padding: 3px 8px;
  text-align: center;
`;

export const Input = styled.textarea<InputProps>`
  font-family: inherit;
  flex: 1;
  min-width: 0;
  width: 100%;
  color: #172033;

  /* Switches between display mode and editable input styling. */
  background: ${({ $isEditing }) => ($isEditing ? "#fff" : "transparent")};
  border: none;
  border-radius: 8px;
  box-shadow: ${({ $isEditing }) =>
    $isEditing ? "inset 0 0 0 1px #818cf8" : "none"};

  resize: none;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  min-height: 20px;
  overflow-wrap: anywhere;
  padding: 8px;
  margin: 0;
  display: block;
  transition: all 0.1s linear;

  &::placeholder {
    font-weight: 400;
    color: #64748b;
  }

  &:focus {
    outline: 2px solid rgba(99, 102, 241, 0.32);
    outline-offset: 1px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  color: #3f4c5f;
  background-color: #ffffff;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 10px 11px;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition:
    border-color 120ms ease,
    background-color 120ms ease,
    color 120ms ease;

  &::before {
    content: "+";
    font-size: 18px;
    line-height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    color: #4f46e5;
    background-color: #eef2ff;
    border-radius: 8px;
  }

  & > span {
    line-height: 20px;
    overflow-wrap: anywhere;
  }

  &:hover,
  &:focus {
    background-color: #f1f5f9;
    border-color: #94a3b8;
    color: #1e293b;
  }

  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.45);
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
  right: 76px;
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
  width: 30px;
  height: 30px;
  color: #64748b;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
  transition:
    border-color 120ms ease,
    background-color 120ms ease,
    color 120ms ease;

  &:hover {
    color: #be123c;
    background-color: #fff1f2;
    border-color: #fecdd3;
  }

  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.45);
    outline-offset: 2px;
  }
`;
