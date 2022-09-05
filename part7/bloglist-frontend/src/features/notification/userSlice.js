import { createSlice, current } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        setUser: {
            reducer(state, action) {
                return action.payload;
            },
        },
        removeUser: {
            reducer(state, action) {
                return action.payload;
            }
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;


export default userSlice.reducer;