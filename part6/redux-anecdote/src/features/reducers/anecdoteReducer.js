import { createSlice } from '@reduxjs/toolkit';

const getId = () => (100000 * Math.random()).toFixed(0)

const AnecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateVote: {
      reducer(state, action) {
        const { id } = action.payload
        const currentNote = state.find(note => note.id === id)
        if (currentNote) {
          currentNote.votes += 1;
        }
      },
      prepare(id) {
        return {
          payload: {
            id,
          }
        }
      }
    },
    setNotes: {
      reducer(state, action) {
        return action.payload;
      }
    },
    createNote: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(content) {
        return {
          payload: {
            content,
            id: getId(),
            votes: 0
          }
        }
      }
    }
  }
})



export const { createNote, updateVote, setNotes } = AnecdoteSlice.actions;

export const SelectAllAnecdotes = (state) => state.anecdotes;

export default AnecdoteSlice.reducer;
