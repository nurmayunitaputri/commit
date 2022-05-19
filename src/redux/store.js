import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// reducers
import login from './reducers/login';
import forgot from './reducers/forgot';
import sendOtp from './reducers/sendOtp';
import confirmOtp from './reducers/confirmOtp';
import signup from './reducers/signup';
import interest from './reducers/interest';
import landing from './reducers/landing';
import upload from './reducers/upload';
import home from './reducers/home';
import detail from './reducers/detail';
import profile from './reducers/profile';
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
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;
