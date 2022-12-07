import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkModeEnable: false,
};

const darkModeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducer: {
    toggleEnable(state, action) {
      const inputValue = action.payload.inputState;

      state.isDarkModeEnable = inputValue;

      const classNameAdding = "dark";
      const bodyClassList = window.document.body.classList;

      if (inputValue) {
        bodyClassList.add(classNameAdding);
      } else {
        bodyClassList.remove(classNameAdding);
      }
    },
  },
});

export const selectDarkMode = (state) => state.darkmode.isDarkModeEnable;

export const { toggleEnable } = darkModeSlice.actions;

export default darkModeSlice.reducer;
