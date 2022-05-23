import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'privacy',
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
export const usePrivacyDispatcher = () => {
  const { simpler } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doPrivacy = async (values) => {
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
    privacy,
    doPrivacy,
  };
};
export default slices.reducer;
