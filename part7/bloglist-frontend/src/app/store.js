import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../features/notification/notificationSlice';
import blogReducer from '../features/notification/blogSlice';

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogReducer
  },
})


