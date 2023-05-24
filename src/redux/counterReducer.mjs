import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState: {
        count: 0,
        // You can have as many variables here as you want
    },
    reducers: {
        // This part contains all the functions that will change the state defined above
        increment: (state, action) => {
            state.count += action.payload; // action.payload is the value passed to the `increment` function
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },

});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;