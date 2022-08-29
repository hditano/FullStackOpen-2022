import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    newFilter: {
      reducer(state, action) {
        const { filter } = action.payload;
        return state = filter
      },
      prepare(filter) {
        return {
          payload: {
            filter,
          }
        }
      }
    }
  }
})

export const { newFilter } = filterSlice.actions;
export const SelectAllFilters = (state) => state.filter;
export default filterSlice.reducer;

