import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'about',
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
  },
});
const { toggleLoading } = slices.actions;
export const useAboutDispatcher = () => {
  const { about } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doAbout = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '#',
      method: '',
      data: values,
    });
    const { data } = response;
    console.log(data);

    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    about,
    doAbout,
  };
};
export default slices.reducer;
