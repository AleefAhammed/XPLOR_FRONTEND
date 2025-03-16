import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getProductById = createAsyncThunk(
    "product/:id",
    async (id, { rejectWithValue }) => {

        try {

            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/product/get/${id}`)

            // console.log(response.data.data);
            return response.data.data;

        } catch (error) {

            return rejectWithValue(error.response?.data || "Failed to fetch products");
        }
    }

)

const productById = createSlice({

    name: "productById",
    initialState: {

        data: {},
        status: "idle",
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(getProductById.pending, (state) => {

                state.status = "loading";
            })
            .addCase(getProductById.fulfilled, (state, action) => {

                state.status = "Success";
                state.data = action.payload;
            })
            .addCase(getProductById.rejected, (state, action) => {

                state.status = "failed";
                state.error = action.error.message;
            })
    }
})

export default productById.reducer