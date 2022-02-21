import { createStore, combineReducers } from "@reduxjs/toolkit";
import pictureReducer from "../components/picture/pictureSlice";
import namesReducer from "../components/names/namesSlice";
import contactReducer from "../components/contact/contactSlice";
import summaryReducer from "../components/summary/summarySlice";
import certificationReducer from "../components/certification/certificationSlice";
import skillsReducer from "../components/skills/skillsSlice";
import languagesReducer from "../components/languages/languageSlice";
import experiencesReducer from "../components/experiences/experienceSlice";
import educationReducer from "../components/education/educationSlice";

const rootReducer = combineReducers({
  picture: pictureReducer,
  names: namesReducer,
  contact: contactReducer,
  summary: summaryReducer,
  certification: certificationReducer,
  skills: skillsReducer,
  languages: languagesReducer,
  experiences: experiencesReducer,
  education: educationReducer
});

const store = createStore(rootReducer);

console.log(store.getState());

export default store;
