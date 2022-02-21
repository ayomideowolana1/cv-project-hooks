import { createSlice } from "@reduxjs/toolkit";

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    content: []
  },
  reducers: {
    setLanguagesList: (state, action) =>
     void (state.content = action.payload.split(","))
  }
});

export const { setLanguagesList } = languagesSlice.actions;
export const selectLanguages = state => state.languages.content;
export default languagesSlice.reducer;
