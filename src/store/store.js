import { createStore, combineReducers } from "@reduxjs/toolkit";
import pictureReducer from "../components/picture/pictureSlice";

const rootReducer = combineReducers({
  picture: pictureReducer
});

const store = createStore(rootReducer);
console.log(store.getState())


export default store;
