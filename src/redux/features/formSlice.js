import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    userInfo: {},
    preferences: {},
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setPreferences: (state, action) => {
      state.preferences = action.payload;
    },
  },
});

export const { setStep, setUserInfo, setPreferences } = formSlice.actions;
export default formSlice.reducer;
