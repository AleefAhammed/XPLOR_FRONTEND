import { createSlice } from "@reduxjs/toolkit";

const searchKey = createSlice({

    name: "search",
    initialState: { value: "" },
    reducers: {

        setSearchKeyWord: (state, action) => {

            state.value = action.payload
        }
    }
})

export const { setSearchKeyWord } = searchKey.actions;
export default searchKey.reducer