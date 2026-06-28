import styled from "styled-components";

interface InputProps {
  readonly $isEditing?: boolean;
}

export const Container = styled.div`
  position: relative;
  display: block;
  background-color: #ffffff;
  border: 1px solid #d7e0ec;
  border-radius: 12px;
  box-shadow:
    0 1px 2px rgba(15, 23, 42, 0.05),
    0 8px 18px rgba(15, 23, 42, 0.03);
  margin-bottom: 10px;
  min-height: 20px;
  padding: 12px 40px 12px 13px;
  color: #172033;
  cursor: pointer;
  transition:
    border-color 120ms ease,
    background-color 120ms ease,
    box-shadow 120ms ease,
    transform 120ms ease;

  &:hover {
    background-color: #fbfdff;
    border-color: #bcc9da;
    box-shadow:
      0 1px 3px rgba(15, 23, 42, 0.07),
      0 12px 24px rgba(15, 23, 42, 0.09);
    transform: translateY(-1px);
  }
`;

export const Title = styled.div`
  color: #1e293b;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  overflow-wrap: anywhere;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Input = styled.textarea<InputProps>`
  font-family: inherit;
  min-width: 0;
  width: 100%;
  min-height: 20px;
  color: #172033;

  /* Switches between read-like styling and active edit styling. */
  background-color: ${({ $isEditing }) =>
    $isEditing ? "#fff" : "transparent"};
  border: none;
  border-radius: 8px;
  box-shadow: ${({ $isEditing }) =>
    $isEditing ? "inset 0 0 0 1px #818cf8" : "none"};

  resize: none;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  overflow-wrap: anywhere;
  padding: 0;
  display: block;

  &:focus {
    outline: 2px solid rgba(99, 102, 241, 0.32);
    outline-offset: 1px;
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
  width: 30px;
  height: 30px;
  color: #64748b;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0;
  border-radius: 8px;
  opacity: 0;
  cursor: pointer;
  transition:
    border-color 120ms ease,
    background-color 120ms ease,
    color 120ms ease,
    opacity 120ms ease;

  /* Reveal the delete button only when the card is hovered. */
  ${Container}:hover &,
  &:focus-visible {
    opacity: 0.8;
  }

  &:hover {
    opacity: 1;
    color: #be123c;
    background-color: #fff1f2;
    border-color: #fecdd3;
  }

  &:focus-visible {
    outline: 2px solid rgba(99, 102, 241, 0.45);
    outline-offset: 2px;
  }
`;
