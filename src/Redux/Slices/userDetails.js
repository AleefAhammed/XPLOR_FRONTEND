import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({

    name: "user",
    initialState: {
        user: {},
        isLoggedIn: false
    },
    reducers: {

        authenticateUser: (state, action) => {

            // console.log("Redux Action Payload:", action.payload);
            state.user = action.payload;
            state.isLoggedIn = true;
        },

        userLogout: (state, action) => {

            state.user = {};
            state.isLoggedIn = false;
        }
    }
})

export const { authenticateUser, userLogout } = userDetails.actions;
export default userDetails.reducer