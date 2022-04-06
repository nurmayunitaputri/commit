import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// reducers
import login from './reducers/login';
import forgot from './reducers/forgot';
import sendOtp from './reducers/sendOtp';
import home from './reducers/home';
import upload from './reducers/upload';
// rootReducer
const rootReducer = combineReducers({
  login,
  home,
  upload,
  forgot,
  sendOtp,
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;
