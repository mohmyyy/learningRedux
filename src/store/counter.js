import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    incrementby5(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    decrementby5(state, action) {
      state.counter = state.counter - action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterAction = counterSlice.actions;
export default counterSlice.reducer