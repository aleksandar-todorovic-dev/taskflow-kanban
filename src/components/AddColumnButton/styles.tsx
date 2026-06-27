import styled from "styled-components";

export const Container = styled.button`
  flex: 0 0 var(--board-column-width);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;

  background-color: rgba(255, 255, 255, 0.84);
  color: #172b4d;

  /* Matches the fixed Trello-style column width used across the board. */
  width: var(--board-column-width);
  max-width: var(--board-column-width);
  min-width: var(--board-column-width);

  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(9, 30, 66, 0.18);
  padding: 11px 12px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  margin-right: 14px;
  margin-bottom: 14px;
  min-height: 44px;
  text-align: left;

  /* Prevents accidental text selection while interacting with the board UI. */
  user-select: none;

  transition:
    background-color 120ms ease,
    box-shadow 120ms ease,
    transform 120ms ease;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: #fff;
    box-shadow: 0 8px 20px rgba(9, 30, 66, 0.22);
  }

  & > span {
    overflow-wrap: anywhere;
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
  flex: 0 0 auto;
`;
