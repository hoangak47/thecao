import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  pass: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.id = action.payload.id;
      state.pass = action.payload.pass;
    },
  },
});

export const { setAccount } = accountSlice.actions;

export default accountSlice.reducer;
