import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
  name: "summary",
  initialState: {
    text: ""
  },
  reducers: {
    setSummary: (state, action) => void (state.text = action.payload)
  }
});

export const { setSummary } = summarySlice.actions;
export const selectSummary = state => state.summary.text;
export default summarySlice.reducer;
