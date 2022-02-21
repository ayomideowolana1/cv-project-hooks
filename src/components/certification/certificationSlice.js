import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const certificationSlice = createSlice({
  name: "certification",
  initialState: {
    list: []
  },
  reducers: {
    addCertification: state =>
      void (state.list = [
        ...state.list,
        { id: uniqid(), title: "", date: "" }
      ]),
    deleteCertification: (state, action) => {
      let arr = [...state.list];
      state.list = arr.filter(item => {
        return item.id != action.payload;
      });
    },
    // why am I getting proxy when i log state here
    updateCertification: (state, action) => {
      let id = action.payload.id;
      let extractedState = extract(state);
      let i = extractedState.list.filter(item => {
        return item.id === action.payload.id;
      });
      let index = extractedState.list.indexOf(i[0]);
      state.list[index] = action.payload;
    }
  }
});

export const {
  addCertification,
  deleteCertification,
  updateCertification
} = certificationSlice.actions;

export const selectCertification = state => state.certification.list;

export default certificationSlice.reducer;

const extract = x => JSON.parse(JSON.stringify(x));
