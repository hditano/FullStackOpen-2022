import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  ''
]

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    newMessage: {
      reducer(state, action) {
        const { content } = action.payload
        state[0] = content
      },
      prepare(content) {
        return {
          payload: {
            content,
          }
        }
      }
    },
    removeMessage: {
      reducer(state, action) {
        Object.assign(state, initialState)
      }
    },
    setNotification: {
      reducer(state, action) {
        return action.payload
      }
    }
  }
})

let timeoutId = null;

export const setupNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(setNotification(message))

    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => dispatch(setNotification(null)), delay * 1000);
  };
};


export const { newMessage, removeMessage, setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
