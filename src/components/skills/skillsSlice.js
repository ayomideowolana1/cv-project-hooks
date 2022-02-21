import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    content: []
  },
  reducers: {
    setSkillsList: (state, action) =>
      void (state.content = action.payload.split(","))
    // console.log(action.payload.split(","))
  }
});

export const { setSkillsList } = skillsSlice.actions;
export const selectSkills = state => state.skills.content;
export default skillsSlice.reducer;
