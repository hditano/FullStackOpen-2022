import { configureStore } from "@reduxjs/toolkit";
import AnecdoteReducer from "../features/reducers/anecdoteReducer";
import NotificationReducer from '../features/reducers/notificationReducer';

const store = configureStore({
  reducer: {
    anecdotes: AnecdoteReducer,
    notification: NotificationReducer,
  }
});

export default store;
