// userStore.ts
import { create } from "zustand";

// Define the state type
interface UserState {
  userId: string | null;
  name: string | null;
  setUser: (userId: string, username: string) => void;
  clearUser: () => void;
}

// Create the Zustand store
export const useUserStore = create<UserState>((set) => ({
  userId: null,
  name: null,
  setUser: (userId, name) => set({ userId, name }),
  clearUser: () => set({ userId: null, name: null }),
}));
