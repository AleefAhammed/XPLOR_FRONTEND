import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
    "products/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/product/all`);
            // console.log(response.data);

            return response.data.data; // Returns the fetched product data
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to fetch products");
        }
    }
);


const allProductSlice = createSlice({

    name: "products",
    initialState: {

        data: [],
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(fetchAllProducts.pending, (state) => {

                state.status = "loading";
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {

                state.data = action.payload;
                state.status = "success"
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {

                state.status = "failed";
                state.error = action.error.message;
            })
    }
})
export default allProductSlice.reducer