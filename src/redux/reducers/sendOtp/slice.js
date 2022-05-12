import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';

const slices = createSlice({
  name: 'sendOtp',
  initialState: {
    loading: false,
    errMessage: {
      title: null,
      content: null,
    },
  },
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setErrMessage(state, action) {
      Object.assign(state, {
        ...state,
        errMessage: action.payload,
      });
    },
  },
});

const { toggleLoading, setErrMessage } = slices.actions;

export const useSendOtpDispatcher = () => {
  const { sendOtp } = useSelector((state) => state);
  const dispatch = useDispatch();
  const makeLoading = (loading) => dispatch(toggleLoading(loading));

  const resendOtp = async (payload) => {
    dispatch(toggleLoading(true));
    try {
      const response = await axios({
        url: 'https://commitapps.herokuapp.com/api/forget-password/resend',
        method: 'post',
        data: payload,
      });
      const { data } = response;

      console.log('data > ', data);

      dispatch(toggleLoading(false));
    } catch (error) {
      console.log('error > ', error);
    }
  };

  const doSendOtp = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/forget-password/validate',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    dispatch(toggleLoading(false));
    return data;
  };
  return {
    sendOtp,
    makeLoading,
    resendOtp,
    doSendOtp,
  };
};

export default slices.reducer;
