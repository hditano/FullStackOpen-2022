import { createSlice } from '@reduxjs/toolkit';

//const getId = () => (100000 * Math.random()).toFixed(0)
//
//const asObject = (anecdote) => {
//  return {
//    content: anecdote,
//    id: getId(),
//    votes: 0
//  }
//}
//
//const initialState = anecdotesAtStart.map(asObject)

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
    }
  }
})



export const { newNote, updateVote, setNotes } = AnecdoteSlice.actions;

export const SelectAllAnecdotes = (state) => state.anecdotes;

export default AnecdoteSlice.reducer;
