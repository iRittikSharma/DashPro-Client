import { create } from "zustand";
import getTasksGroupedByColumns from "@/lib/getTasksGroupedByColumns";
interface BoardState {
  board: Board;
  getBoard: (id: string | null) => void;
  setBoardState: (board: Board) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async (userId) => {
    const board = await getTasksGroupedByColumns(userId);
    set({ board }); // this set will set the global state
  },

  setBoardState: (board) => set({ board }),
}));
