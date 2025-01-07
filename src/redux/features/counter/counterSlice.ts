import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state , action) => {
            state.count -= action.payload;
        }
    }
})

export const { decrement, increment } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;