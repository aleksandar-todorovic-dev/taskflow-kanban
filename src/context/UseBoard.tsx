import { useContext } from "react";

import { BoardContext } from "./BoardContext";

export function useBoard() {
  const context = useContext(BoardContext);

  // Fail fast if the hook is used outside of BoardProvider.
  if (context === undefined) {
    throw new Error("useBoard must be used within a BoardProvider");
  }

  return context;
}
