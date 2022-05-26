import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'contact',
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
export const useContactDispatcher = () => {
  const { contact } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doContact = async (values) => {
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
    contact,
    doContact,
  };
};
export default slices.reducer;
