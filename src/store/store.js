import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../services/userItem";

export const store = configureStore({
  reducer: {
    userItem: userReducer,
  },
});
