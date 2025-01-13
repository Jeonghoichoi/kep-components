import create from "zustand";
import { DarkEffect } from "@/interfaces/ThemeInterface";

export const useStore = create<DarkEffect>((set) => ({
  darkMode:false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));
