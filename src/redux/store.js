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
import home from './reducers/home';
import upload from './reducers/upload';
import halaman from './reducers/halaman';
// rootReducer
const rootReducer = combineReducers({
  login,
  home,
  upload,
  forgot,
  sendOtp,
  confirmOtp,
  signup,
  interest,
  landing,
  halaman,
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;
