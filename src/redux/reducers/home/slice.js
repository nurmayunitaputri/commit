import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'home',
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
export const useHomeDispatcher = () => {
  const { home } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doHome = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/register',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    console.log(data);
    // localStorage.setItem('jwt', data.jwt);
    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    home,
    doHome,
  };
};
export default slices.reducer;
