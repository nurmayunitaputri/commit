import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// reducers
import login from "./reducers/login";
import forgot from "./reducers/forgot";
import sendOtp from "./reducers/sendOtp";
import confirmOtp from "./reducers/confirmOtp";
import signup from "./reducers/signup";
import interest from "./reducers/interest";
import landing from "./reducers/landing";
import upload from "./reducers/upload";
import home from "./reducers/home";
import detail from "./reducers/detail";
import profile from "./reducers/profile";
import simpler from "./reducers/simpler";
import bookmark from "./reducers/bookmark";
import suggestedPeople from "./reducers/suggestedPeople";
import privacy from "./reducers/privacy";
import contact from "./reducers/about";
import search from "./reducers/search";
import about from "./reducers/about";
import contact from "./reducers/privacy copy";
import search from "./reducers/search";

// rootReducer
const rootReducer = combineReducers({
  login,
  upload,
  forgot,
  sendOtp,
  confirmOtp,
  signup,
  interest,
  landing,
  home,
  detail,
  profile,
  simpler,
  bookmark,
  suggestedPeople,
  privacy,
  contact,
  search,
  about,
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
export default store;
