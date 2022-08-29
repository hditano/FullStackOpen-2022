import { configureStore } from "@reduxjs/toolkit";
import AnecdoteReducer from "../features/reducers/anecdoteReducer";
import NotificationReducer from '../features/reducers/notificationReducer';
import FilterReducer from '../features/reducers/filterReducer';

const store = configureStore({
  reducer: {
    anecdotes: AnecdoteReducer,
    notification: NotificationReducer,
    filter: FilterReducer,
  }
});

export default store;
