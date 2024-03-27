import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name: "login",
    initialState: false,
    reducers: {
        userlogin: (state, action) => {
            state = action.payload;
            return state;
        },
        userlogout: (state, action) => {
            state = action.payload;
            return state;
        }
    }
})

export const { userlogin, userlogout } = login.actions;
export default login.reducer;