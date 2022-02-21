import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const educationSlice = createSlice({
  name: "education",
  initialState: {
    content: []
  },
  reducers: {
    addEducation: state =>
      void (state.content = [
        ...state.content,
        { id: uniqid(), school: "", course: "", educationType: "", year: "" }
      ]),
    removeEducation: (state, action) => {
      state.content = state.content.filter(item => {
        return item.id != action.payload;
      });
    },
    updateEducation: (state, action) => {
      let i = state.content.filter(item => {
        return item.id == action.payload.id;
      });
      let index = state.content.indexOf(i[0]);
      state.content[index] = action.payload;
    }
  }
});

export const {
  addEducation,
  removeEducation,
  updateEducation
} = educationSlice.actions;
export const selectEducation = state => state.education.content;
export default educationSlice.reducer;
