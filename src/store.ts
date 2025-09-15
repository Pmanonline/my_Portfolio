import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/Slice";
import themeReducer from "./features/Theme/themeSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
