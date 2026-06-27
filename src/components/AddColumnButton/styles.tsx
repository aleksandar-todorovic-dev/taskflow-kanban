import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: hsla(0, 0%, 100%, 0.24);
  color: #fff;

  /* Matches the fixed Trello-style column width used across the board. */
  width: 272px;
  max-width: 272px;
  min-width: 272px;

  border-radius: 3px;
  padding: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  margin-right: 12px;

  /* Prevents accidental text selection while interacting with the board UI. */
  user-select: none;

  transition: all 85ms ease-in;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: hsla(0, 0%, 100%, 0.32);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

export const IconContainer = styled.div`
  margin-right: 4px;
  opacity: 0.8;
  display: flex;
`;
