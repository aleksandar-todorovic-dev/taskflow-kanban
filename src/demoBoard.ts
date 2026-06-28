import type { Column } from "./types";

const demoBoard: Column[] = [
  {
    id: "demo-column-backlog",
    title: "Backlog",
    cards: [
      {
        id: "demo-card-plan-portfolio-scope",
        title: "Plan portfolio project scope",
      },
      {
        id: "demo-card-outline-typescript-concepts",
        title: "Outline key TypeScript concepts",
      },
      {
        id: "demo-card-responsive-checklist",
        title: "Prepare responsive layout checklist",
      },
    ],
  },
  {
    id: "demo-column-in-progress",
    title: "In Progress",
    cards: [
      {
        id: "demo-card-reusable-components",
        title: "Build reusable board components",
      },
      {
        id: "demo-card-connect-dnd",
        title: "Connect drag-and-drop interactions",
      },
    ],
  },
  {
    id: "demo-column-review",
    title: "Review",
    cards: [
      {
        id: "demo-card-test-mobile-scrolling",
        title: "Test mobile board scrolling",
      },
      {
        id: "demo-card-check-wrapping",
        title: "Check long text wrapping",
      },
      {
        id: "demo-card-accessibility-polish",
        title: "Review accessibility polish",
      },
    ],
  },
  {
    id: "demo-column-done",
    title: "Done",
    cards: [
      {
        id: "demo-card-local-storage",
        title: "Persist board state locally",
      },
      {
        id: "demo-card-demo-reset-actions",
        title: "Add demo and reset actions",
      },
      {
        id: "demo-card-polish-taskflow-design",
        title: "Polish TaskFlow visual design",
      },
    ],
  },
];

export const createDemoBoard = (): Column[] =>
  demoBoard.map((column) => ({
    ...column,
    cards: column.cards.map((card) => ({ ...card })),
  }));
