import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const experienceSlice = createSlice({
  name: "experiences",
  initialState: {
    content: []
  },
  reducers: {
    addNewExperience: (state, action) =>
      void (state.content = [
        ...state.content,
        {
          id: uniqid(),
          position: "",
          company: "",
          dateFrom: "",
          dateTo: ""
        }
      ]),
    deleteExperience: (state, action) =>
      void (state.content = state.content.filter(item => {
        return item.id != action.payload;
      })),
    updateExperience: (state, action) => {
      let id = action.payload.id;
      let i = state.content.filter(item => {
        return item.id == id;
      });
      let index = state.content.indexOf(i[0]);
      state.content[index] = action.payload;
    }
  }
});

export const {
  addNewExperience,
  deleteExperience,
  updateExperience
} = experienceSlice.actions;

export const selectExperience = state => state.experiences.content;
export default experienceSlice.reducer