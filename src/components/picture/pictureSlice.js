import { createSlice } from "@reduxjs/toolkit";

const pictureSlice = createSlice({
  name: "picture",
  initialState: {
    url: ""
  },
  reducers: {
    setPicture: (state, action) => void(state.url = action.payload)
  }
});

export const { setPicture } = pictureSlice.actions;
export const selectPicture = state => state.url;
export default pictureSlice.reducer;
