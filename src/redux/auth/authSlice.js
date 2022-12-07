import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    assignToken: (state, action) => {
      state.token = action.payload.token;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { assignToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
