import styled from "styled-components";

interface HeaderButtonProps {
  readonly $variant?: "primary" | "secondary";
}

export const Board = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  box-sizing: border-box;

  /* Keeps columns in a single horizontal row, like a Trello board. */
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 16px;
  background: linear-gradient(135deg, #1769aa 0%, #25835a 62%, #b56b1e 120%);

  /* Allows horizontal scrolling when the board has more columns than screen space. */
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-color: rgba(255, 255, 255, 0.58) rgba(9, 30, 66, 0.2);
  scrollbar-width: thin;

  /* Custom horizontal scrollbar styling for WebKit-based browsers. */
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(9, 30, 66, 0.2);
    border-radius: 999px;
    margin: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.58);
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.78);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Header = styled.header`
  flex: 0 0 auto;
  min-height: 58px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid rgba(9, 30, 66, 0.12);
  box-shadow: 0 1px 4px rgba(9, 30, 66, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 20px;
  color: #172b4d;

  @media (max-width: 480px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 12px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin: 0;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const HeaderButton = styled.button<HeaderButtonProps>`
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  min-height: 34px;
  padding: 8px 12px;
  transition:
    background-color 120ms ease,
    box-shadow 120ms ease,
    color 120ms ease;

  ${({ $variant = "primary" }) =>
    $variant === "secondary"
      ? `
        background-color: #f1f2f4;
        color: #172b4d;
      `
      : `
        background-color: #0c66e4;
        color: #fff;
      `}

  &:hover {
    ${({ $variant = "primary" }) =>
      $variant === "secondary"
        ? `
          background-color: #dcdfe4;
        `
        : `
          background-color: #0055cc;
        `}
  }

  &:focus-visible {
    outline: 2px solid #0c66e4;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    flex: 1 1 130px;
  }
`;

export const List = styled.div`
  /* Holds board columns next to each other without wrapping. */
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  min-height: 100%;
`;

export const EmptyState = styled.section`
  flex: 0 0 var(--board-column-width);
  width: var(--board-column-width);
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(9, 30, 66, 0.12);
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(9, 30, 66, 0.14);
  color: #172b4d;
  margin-right: 14px;
  padding: 18px;
`;

export const EmptyStateTitle = styled.h2`
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 6px;
`;

export const EmptyStateText = styled.p`
  color: #5e6c84;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
`;
