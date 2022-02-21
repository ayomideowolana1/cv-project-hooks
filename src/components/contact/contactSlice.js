import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    phone: "####-####-###",
    email: "johndoe@mailProvider.com"
  },
  reducers: {
    setContact: (state, action) =>
      void (
        (state.email = action.payload.email),
        (state.phone = action.payload.phone)
      )
  }
});

export const { setContact } = contactSlice.actions;
export const selectContact = state => state.contact;
export default contactSlice.reducer