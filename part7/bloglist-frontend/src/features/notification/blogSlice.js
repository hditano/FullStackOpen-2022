import { createSlice, current } from '@reduxjs/toolkit';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    setBlog: {
      reducer(state, action) {
        state.push(action.payload);
      }
    },
    setRemove: {
      reducer(state, action){
        return state = [];
      }
    }
  },

}
)


export const { setBlog, setRemove } = blogSlice.actions;

export default blogSlice.reducer;
