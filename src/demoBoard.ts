import type { Column } from "./types";

const demoBoard: Column[] = [
  {
    id: "demo-column-ideas",
    title: "Ideas",
    cards: [
      {
        id: "demo-card-capture-inspiration",
        title: "Capture project ideas as cards",
      },
      {
        id: "demo-card-edit-copy",
        title: "Edit card text and keep changes after refresh",
      },
      {
        id: "demo-card-drag-columns",
        title: "Drag columns to reorganize the workflow",
      },
    ],
  },
  {
    id: "demo-column-in-progress",
    title: "In Progress",
    cards: [
      {
        id: "demo-card-polish-responsive",
        title: "Polish responsive board layout",
      },
      {
        id: "demo-card-move-between-lists",
        title: "Move cards between lists with drag and drop",
      },
    ],
  },
  {
    id: "demo-column-done",
    title: "Done",
    cards: [
      {
        id: "demo-card-local-storage",
        title: "Persist board state with localStorage",
      },
      {
        id: "demo-card-delete-items",
        title: "Delete cards and lists when work is finished",
      },
    ],
  },
];

export const createDemoBoard = (): Column[] =>
  demoBoard.map((column) => ({
    ...column,
    cards: column.cards.map((card) => ({ ...card })),
  }));
