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
    }
  }
})


export const { newMessage, removeMessage } = notificationSlice.actions;

export default notificationSlice.reducer;
