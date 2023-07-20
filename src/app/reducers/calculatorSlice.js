import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    screen: "",
    operator: "",
    value1: "",
}

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.screen = state.screen.concat(action.payload)
        },
        delNumber: (state) => {
            state.screen = state.screen.slice(0, -1);
        },
        addOperator: (state, action) => {
            state.operator = action.payload;
            state.value1 = Number(state.screen); 
            state.screen = "";
        },
        calculateValues: (state) => {
            let result = 0;
            const value1 = Number(state.value1);
            const value2 = Number(state.screen);

            switch (state.operator) {
                case "+":
                    result = value1 + value2;
                    break;
                case "-":
                    result = value1 - value2;
                    break;
                case "/":
                    result = value1 / value2;
                    break;
                case "x":
                    result = value1 * value2;
                    break;
                default:
                    break;
            }

            state.screen = String(result)
        },
        resetValues: (state) => {
            state.screen = ""
            state.operator = ""
            state.value1 = ""
        },
    }
})

export const {
    addNumber,
    delNumber,
    addOperator,
    resetValues,
    calculateValues
} = calculatorSlice.actions;

export default calculatorSlice.reducer;