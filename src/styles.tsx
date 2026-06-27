import styled from "styled-components";

export const Board = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;

  /* Keeps columns in a single horizontal row, like a Trello board. */
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 12px;
  margin-bottom: 12px;

  /* Allows horizontal scrolling when the board has more columns than screen space. */
  overflow: auto;

  /* Custom horizontal scrollbar styling for WebKit-based browsers. */
  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #0367a3;
    border-radius: 3px;
    margin: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #72a4c7;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #72a4c7;
  }

  /* Hides vertical scrollbar UI because the board is meant to scroll horizontally. */
  ::-webkit-scrollbar:vertical {
    display: none;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }
`;

export const Header = styled.header`
  height: 40px;
  width: 100%;
  background-color: #9b4109;
  margin-bottom: 12px;
  display: flex;
  justify-content: flex-end;
  padding: 4px;
`;

export const List = styled.div`
  /* Holds board columns next to each other without wrapping. */
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  height: 100%;
`;
