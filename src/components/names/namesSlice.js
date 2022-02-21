import { createSlice } from "@reduxjs/toolkit";

const namesSlice = createSlice({
  name: "names",
  initialState: {
    firstName: "John",
    middleNames: "Micheal",
    lastName: "Doe"
  },
  reducers: {
    setNames: (state, action) =>
      void (
        (state.firstName = action.payload.firstName),
        (state.middleNames = action.payload.middleNames),
        (state.lastName= action.payload.lastName)
      )
  }
});

export const { setNames } = namesSlice.actions;
export const selectNames = state => state.names;
export default namesSlice.reducer;
