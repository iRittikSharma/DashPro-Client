import { create } from "zustand";
import getTasksGroupedByColumns from "@/lib/getTasksGroupedByColumns";
interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTasksGroupedByColumns();
    set({ board }); // this set will set the global state
  },

  setBoardState: (board) => set({ board }),
}));
