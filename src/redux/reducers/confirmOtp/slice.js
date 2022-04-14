import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'confirmOtp',
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
export const useConfirmOtpDispatcher = () => {
  const { confirmOtp } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doConfirmOtp = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/forget-password/change-password',
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
    confirmOtp,
    doConfirmOtp,
  };
};
export default slices.reducer;
