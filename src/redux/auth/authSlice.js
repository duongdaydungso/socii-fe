import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userID: null,
  userType: null,
  userEmail: null,
  userName: null,
  userAvatar: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    assignToken: (state, action) => {
      state.token = action.payload.token;
      state.userID = action.payload.userID;
      state.userType = action.payload.userType;
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
      state.userAvatar = action.payload.userAvatar;
    },
    clearToken: (state) => {
      state.token = null;
      state.userID = null;
      state.userType = null;
      state.userEmail = null;
      state.userName = null;
      state.userAvatar = null;
    },
    editProfileReducer: (state, action) => {
      state.userName = action.payload.userName;
      state.userAvatar = action.payload.userAvatar;
    },
  },
});

export const selectAuth = (state) => state.auth;

export const { assignToken, clearToken, editProfileReducer } =
  authSlice.actions;

export default authSlice.reducer;
