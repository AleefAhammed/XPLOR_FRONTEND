import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserUploadedProducts = createAsyncThunk(
    "product/user/:id",
    async (id, { rejectWithValue }) => {

        try {

            // console.log(id);

            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/product/user/${id}`, { withCredentials: true })

            return response.data.data
        } catch (error) {

            return rejectWithValue(error.response?.data || "Failed to fetch products");
        }
    }
)

export const deleteProductById = createAsyncThunk(
    "product/deletete/:id",
    async (id, { rejectWithValue }) => {

        try {

            const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/product/delete/${id}`, { withCredentials: true })
            return id
        } catch (error) {

            return rejectWithValue(error.response?.data || "Failed to delete products");
        }
    }
)

const usersProducts = createSlice({

    name: "usersProducts",
    initialState: {

        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => (

        builder
            .addCase(getUserUploadedProducts.pending, (state, action) => {

                state.status = "loading";
            })
            .addCase(getUserUploadedProducts.fulfilled, (state, action) => {

                state.data = action.payload;
                state.status = "success";
            })
            .addCase(getUserUploadedProducts.rejected, (state, action) => {

                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteProductById.fulfilled, (state, action) => {

                state.status = "success";
                state.data = state.data = state.data.filter(product => product._id !== action.payload);
            })
    )
})

export default usersProducts.reducer