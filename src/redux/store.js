import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// reducers
import login from './reducers/login';
import registration from './reducers/registration';
import signup from './reducers/signup';
import home from './reducers/home';
import upload from './reducers/upload';
// rootReducer
const rootReducer = combineReducers({
  login,
  home,
  upload,
  registration,
  signup,
});
// store (main storage)
const store = configureStore({
  reducer: rootReducer,
});
export default store;
