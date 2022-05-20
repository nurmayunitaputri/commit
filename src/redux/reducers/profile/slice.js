import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'profile',
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
export const useProfileDispatcher = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doProfile = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '',
      method: '',
      data: values,
    });
    const { data } = response;
    console.log(data);
    // if (!data.access_token) {
    //   dispatch(toggleLoading(true));
    //   console.log(`something wrong`);
    //   return;
    // }
    // localStorage.setItem('jwt', data.jwt);
    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    profile,
    doProfile,
  };
};
export default slices.reducer;