import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isMenuOpen: boolean;
  currentSection: string;
  scrollProgress: number;
  isLoading: boolean;
}

const initialState: UIState = {
  isMenuOpen: false,
  currentSection: "home",
  scrollProgress: 0,
  isLoading: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setCurrentSection: (state, action: PayloadAction<string>) => {
      state.currentSection = action.payload;
    },
    setScrollProgress: (state, action: PayloadAction<number>) => {
      state.scrollProgress = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { toggleMenu, setCurrentSection, setScrollProgress, setLoading } =
  uiSlice.actions;
export default uiSlice.reducer;
