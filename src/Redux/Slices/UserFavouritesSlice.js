import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllUserFavourites = createAsyncThunk(
    "favourite/userId",
    async (id, { rejectWithValue }) => {

        try {

            // console.log(id);
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/favourite/userId/${id}`)
            // console.log(response.data.data);
            return response.data.data;

        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch products");
        }
    }
)

export const deleteFAvouriteById = createAsyncThunk(

    "favourite/remove/:id",
    async (id, { rejectWithValue }) => {

        try {

            const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/favourite/remove/${id}`, { withCredentials: true });
            return id; // Return the deleted ID to update state
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to delete favourite");
        }
    }
)

const userFavourites = createSlice({

    name: "userFavourites",
    initialState: {

        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getAllUserFavourites.pending, (state) => {

                state.status = "loading";
            })
            .addCase(getAllUserFavourites.fulfilled, (state, action) => {

                state.data = action.payload;
                state.status = "success";
            })
            .addCase(getAllUserFavourites.rejected, (state, action) => {

                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteFAvouriteById.fulfilled, (state, action) => {

                state.data = state.data.filter(fav => fav._id !== action.payload)
            })
    }
})

export default userFavourites.reducer