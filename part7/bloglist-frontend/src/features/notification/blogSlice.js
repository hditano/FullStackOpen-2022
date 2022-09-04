import { createSlice, current } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlog: {
      reducer(state, action) {
        state.push(action.payload);
        console.log(action.payload)
      }
    }
  },

}
)


export const { setBlog } = blogSlice.actions;

export default blogSlice.reducer;
