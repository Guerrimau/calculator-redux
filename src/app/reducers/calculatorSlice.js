import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screen: "",
    value1: "",
    value2: ""
}

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.screen = state.screen.concat(action.payload)
        }
    }
})

export const { addNumber } = calculatorSlice.actions;

export default calculatorSlice.reducer;