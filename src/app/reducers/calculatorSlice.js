import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentNumber: "",
    result: "",
    operator: "",
    value1: "",
}

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        addNumber: (state, action) => {
            if(state.result.length > 0) {
                state.result = "";
            }

            if(state.currentNumber.includes(".")
                && action.payload === ".") {
                return;
            }

            state.currentNumber = state.currentNumber.concat(action.payload)
        },
        delNumber: (state) => {
            if(state.result.length > 0) {
                state.result = "";
            }

            state.currentNumber = state.currentNumber.slice(0, -1);
        },
        addOperator: (state, action) => {
            state.operator = action.payload;
            state.value1 = Number(state.currentNumber); 
            state.currentNumber = "";
        },
        calculateValues: (state) => {
            let result = 0;
            const value1 = Number(state.value1);
            const value2 = Number(state.currentNumber);

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

            state.currentNumber = ""
            state.operator = ""
            state.value1 = ""
            state.result = String(result)
        },
        resetValues: (state) => {
            state.currentNumber = ""
            state.result = ""
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