import { configureStore } from "@reduxjs/toolkit";
import AnecdoteReducer from "../features/reducers/anecdoteReducer";

const store = configureStore({
  reducer: {
    anecdotes: AnecdoteReducer
  }
});

export default store;
