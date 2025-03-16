import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserAllDetails = createAsyncThunk(
    "user/get/:id",
    async (id, { rejectWithValue }) => {

        try {

            // console.log(id);
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/get/${id}`, { withCredentials: true })
            // console.log(response.data);
            return response.data.data
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch details");
        }
    }
)

const userAllDetails = createSlice({

    name: "userAllDetails",
    initialState: {

        data: {},
        error: null,
        status: "idle"
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getUserAllDetails.pending, (state) => {

                state.status = "loafing"
            })
            .addCase(getUserAllDetails.fulfilled, (state, action) => {

                state.data = action.payload;
                state.status = "success";
            })
            .addCase(getUserAllDetails.rejected, (state, action) => {

                state.error = action.error.message;
                state.status = "false"
            })
    }
})

export default userAllDetails.reducer