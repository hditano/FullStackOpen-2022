import { configureStore } from '@reduxjs/toolkit';
import notificationReducer from '../features/notification/notificationSlice';
import blogReducer from '../features/notification/blogSlice';
import userReducer from '../features/notification/userSlice';

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    blogs: blogReducer,
    user: userReducer
  },
})


