import styled from "styled-components";

export const Container = styled.button`
  flex: 0 0 var(--board-column-width);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.84)),
    rgba(255, 255, 255, 0.82);
  color: #334155;

  /* Matches the fixed Trello-style column width used across the board. */
  width: var(--board-column-width);
  max-width: var(--board-column-width);
  min-width: var(--board-column-width);

  border: 1px dashed #aebccd;
  border-radius: 16px;
  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.07),
    inset 0 1px 0 rgba(255, 255, 255, 0.84);
  padding: 14px 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 800;
  margin-right: 16px;
  margin-bottom: 16px;
  min-height: 48px;
  text-align: left;

  /* Prevents accidental text selection while interacting with the board UI. */
  user-select: none;

  transition:
    border-color 120ms ease,
    background-color 120ms ease,
    box-shadow 120ms ease,
    transform 120ms ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #ffffff;
    border-color: #64748b;
    box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
    color: #0f172a;
  }

  & > span {
    overflow-wrap: anywhere;
  }

  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.45);
    outline-offset: 2px;
  }
`;

export const IconContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-color: #eef2ff;
  border: 1px solid #c7d2fe;
  border-radius: 8px;
  color: #4f46e5;
  display: flex;
  flex: 0 0 auto;
`;
