import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'interest',
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
export const useInterestDispatcher = () => {
  const { interest } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doInterest = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/register',
      method: 'post',
      data: values,
    });
    const { data } = response;
  console.log(response)

    dispatch(toggleLoading(false));
  };
  return {
    interest,
    doInterest,
  };
};
export default slices.reducer;
