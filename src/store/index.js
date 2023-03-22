import { configureStore, createSlice } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from './counter'

// const initialState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     incrementby5(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     decrementby5(state, action) {
//       state.counter = state.counter - action.payload;
//     },
//     showCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initialAuthState = {
//   isAuntheticated: false,
// };
// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuntheticated = true;
//     },
//     logout(state) {
//       state.isAuntheticated = false;
//     },
//   },
// });

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});



export default store;
