import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  'This is a test message',
]

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    newMessage: {
      reducer(state, action) {
        return state;
      },
      producer(message) {
        return {
          payload: {
            message,
          }
        }
      }
    }
  }
})


export const { newMessage } = notificationSlice.actions;

export default notificationSlice.reducer;
