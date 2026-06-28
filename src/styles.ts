import styled from "styled-components";

interface HeaderButtonProps {
  readonly $variant?: "primary" | "secondary" | "danger";
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

  padding: clamp(16px, 2.2vw, 28px);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.72), transparent 168px),
    linear-gradient(90deg, rgba(71, 85, 105, 0.06) 0 1px, transparent 1px),
    linear-gradient(180deg, rgba(71, 85, 105, 0.05) 0 1px, transparent 1px),
    #e4ebf5;
  background-size:
    auto,
    32px 32px,
    32px 32px,
    auto;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.74);

  /* Allows horizontal scrolling when the board has more columns than screen space. */
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-color: #94a3b8 #dbe3ee;
  scrollbar-width: thin;

  /* Custom horizontal scrollbar styling for WebKit-based browsers. */
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #dbe3ee;
    border-radius: 999px;
    margin: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: #94a3b8;
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const Header = styled.header`
  flex: 0 0 auto;
  width: 100%;
  background:
    linear-gradient(180deg, #ffffff 0%, #f8fafc 100%),
    #f8fafc;
  border-bottom: 1px solid #dbe3ee;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(18px, 3vw, 36px);
  padding: 20px clamp(18px, 3vw, 32px);
  color: #172033;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 16px;
    padding: 14px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 0;
  gap: 22px;
  flex: 1 1 auto;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const HeaderBrand = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
  gap: 14px;
`;

export const HeaderLogoMark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  position: relative;
  width: 52px;
  height: 52px;
  overflow: hidden;
  border: 1px solid rgba(129, 140, 248, 0.52);
  border-radius: 17px;
  background:
    linear-gradient(135deg, rgba(129, 140, 248, 0.28), transparent 48%),
    #111827;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 16px 30px rgba(30, 41, 59, 0.18);

  &::before {
    content: "";
    position: absolute;
    inset: 13px 12px 12px;
    border-radius: 10px;
    background:
      linear-gradient(#c7d2fe, #c7d2fe) left top / 8px 22px no-repeat,
      linear-gradient(#38bdf8, #38bdf8) center top / 8px 16px no-repeat,
      linear-gradient(#e2e8f0, #e2e8f0) right top / 8px 25px no-repeat;
  }

  &::after {
    content: "";
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 11px;
    height: 3px;
    border-radius: 999px;
    background-color: rgba(226, 232, 240, 0.34);
  }
`;

export const HeaderBrandText = styled.div`
  min-width: 0;
`;

export const HeaderEyebrow = styled.p`
  color: #475569;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0;
  line-height: 14px;
  margin: 0 0 2px;
  text-transform: uppercase;
`;

export const HeaderTitle = styled.h1`
  color: #0f172a;
  font-size: 29px;
  line-height: 32px;
  font-weight: 900;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 25px;
    line-height: 29px;
  }
`;

export const HeaderSubtitle = styled.p`
  color: #64748b;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  margin: 4px 0 0;
  max-width: 500px;
`;

export const HeaderStats = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  flex-wrap: wrap;
  flex: 0 0 auto;
  padding: 3px;
  background-color: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 999px;

  @media (max-width: 420px) {
    border-radius: 16px;
  }
`;

export const Stat = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  background-color: #ffffff;
  border: 1px solid transparent;
  border-radius: 999px;
  color: #64748b;
  font-size: 13px;
  line-height: 18px;
  padding: 7px 11px;

  & > strong {
    color: #1e293b;
    font-size: 14px;
    font-weight: 800;
  }
`;

export const SavedIndicator = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #f0fdfa;
  border: 1px solid #99f6e4;
  border-radius: 999px;
  color: #0f766e;
  font-size: 13px;
  font-weight: 800;
  line-height: 18px;
  padding: 7px 11px;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    background-color: #14b8a6;
    border-radius: 999px;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex: 0 0 auto;
  gap: 9px;
  background-color: #ffffff;
  border: 1px solid #dbe3ee;
  border-radius: 16px;
  box-shadow:
    0 14px 30px rgba(15, 23, 42, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.78);
  padding: 10px;

  @media (max-width: 900px) {
    align-items: stretch;
    width: 100%;
  }

  @media (max-width: 480px) {
    border-radius: 14px;
  }
`;

export const HeaderButtonRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const HeaderActionHint = styled.p`
  color: #64748b;
  align-self: stretch;
  background-color: #f8fafc;
  border: 1px solid #e8edf5;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  margin: 0;
  padding: 7px 9px;
  text-align: left;

  @media (max-width: 900px) {
    max-width: none;
  }
`;

export const HeaderButton = styled.button<HeaderButtonProps>`
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;
  min-height: 38px;
  padding: 9px 14px;
  transition:
    border-color 120ms ease,
    background-color 120ms ease,
    box-shadow 120ms ease,
    color 120ms ease;

  ${({ $variant = "primary" }) =>
    $variant === "secondary"
      ? `
        background-color: #ffffff;
        border-color: #dbe3ee;
        color: #334155;
      `
      : $variant === "danger"
        ? `
          background-color: #fff7f7;
          border-color: #fecdd3;
          color: #be123c;
        `
        : `
          background-color: #4f46e5;
          color: #fff;
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.18);
        `}

  &:hover {
    ${({ $variant = "primary" }) =>
      $variant === "secondary"
        ? `
          background-color: #f8fafc;
          border-color: #cbd5e1;
          color: #1e293b;
        `
        : $variant === "danger"
          ? `
            background-color: #fff1f2;
            border-color: #fda4af;
          `
          : `
            background-color: #4338ca;
            box-shadow: 0 10px 18px rgba(79, 70, 229, 0.22);
          `}
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.48;
    box-shadow: none;
  }

  &:disabled:hover {
    ${({ $variant = "primary" }) =>
      $variant === "secondary"
        ? `
          background-color: #ffffff;
          border-color: #dbe3ee;
          color: #334155;
        `
        : $variant === "danger"
          ? `
            background-color: #fff7f7;
            border-color: #fecdd3;
            color: #be123c;
          `
        : `
          background-color: #4f46e5;
        `}
  }

  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.45);
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
  padding-bottom: 20px;
`;

export const EmptyState = styled.section`
  flex: 0 0 var(--board-column-width);
  width: var(--board-column-width);
  align-self: flex-start;
  background:
    linear-gradient(180deg, #ffffff 0%, #f8fafc 100%),
    #ffffff;
  border: 1px solid #d5deeb;
  border-radius: 18px;
  box-shadow: 0 20px 44px rgba(15, 23, 42, 0.1);
  color: #172033;
  margin-right: 16px;
  padding: 26px;

  &::before {
    content: "+";
    display: block;
    width: 42px;
    height: 42px;
    background-color: #eef2ff;
    border: 1px solid #c7d2fe;
    border-radius: 14px;
    box-shadow: 0 10px 22px rgba(79, 70, 229, 0.12);
    color: #4f46e5;
    font-size: 24px;
    font-weight: 700;
    line-height: 38px;
    margin-bottom: 16px;
    text-align: center;
  }
`;

export const EmptyStateTitle = styled.h2`
  color: #0f172a;
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 8px;
`;

export const EmptyStateText = styled.p`
  color: #64748b;
  font-size: 14px;
  line-height: 21px;
  margin: 0;
`;
