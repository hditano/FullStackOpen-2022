import { createSlice, current } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
    name: 'allusers',
    initialState: [],
    reducers: {
        setList: {
            reducer(state, action) {
                return action.payload
            }
        },
    }
});

export const {setList, getData} = allUsersSlice.actions;

export default allUsersSlice.reducer;