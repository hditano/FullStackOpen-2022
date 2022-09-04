import { createSlice, current } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    setNotificationSuccess: {
      reducer(state, action) {
        if (action.payload.type === 'success') {
          console.log(current(state))
          return action.payload;
        }
        return state;
      },
      prepare(message, type) {
        return {
          payload: {
            message,
            type
          }
        }
      }
    },
    setNotificationError: {
      reducer(state, action) {
        return action.payload
      },
      prepare(message, type) {
        return {
          payload: {
            message,
            type
          }
        }
      }
    },
    setNotificationRemove: {
      reducer(state, action) {
        return state = [];
      }
    },
  }
})

export const { setNotificationSuccess, setNotificationError, setNotificationRemove } = notificationSlice.actions;

export default notificationSlice.reducer;
