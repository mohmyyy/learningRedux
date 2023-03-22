import { createSlice } from "@reduxjs/toolkit";


const initialAuthState = {
  isAuntheticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuntheticated = true;
    },
    logout(state) {
      state.isAuntheticated = false;
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer