import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const checkUserSigned = createAsyncThunk(
    "user/verify",
    async (_, { rejectWithValue }) => {

        try {

            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/verify`, { withCredentials: true })

            console.log(response.data);

        } catch (error) {

            return rejectWithValue(error.response?.data || "Failed to fetch products");

        }
    }
)

const userDetails = createSlice({

    name: "userDetails",
    initialState: {

        user: {},
        isLoggedIn: false,
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(checkUserSigned.pending, (state, action) => {

                state.status = "loading"
            })
            .addCase(checkUserSigned.fulfilled, (state, action) => {

                state.data = action.payload;
                state.isLoggedIn = true
                state.status = "success";
            })
            .addCase(checkUserSigned.rejected, (state, action) => {


                state.data = {};
                state.isLoggedIn = false;
                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default userDetails.reducer
