import { createSlice } from "@reduxjs/toolkit";

const optionSlice = createSlice({

    name: "option",
    initialState: { value: "My Wishlist" },
    reducers: {

        setOption: (state, action) => {

            state.value = action.payload
        }
    }
});

export const { setOption } = optionSlice.actions;
export default optionSlice.reducer