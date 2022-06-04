import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: "interest",
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
    console.log(values);
    dispatch(toggleLoading(true));

    try {
      const response = await callAPI({
        url: "/register",
        method: "POST",
        data: values,
      });

      if (response.data.status >= 400) {
        throw response.data.message;
      }

      dispatch(toggleLoading(false));
    } catch (e) {
      dispatch(toggleLoading(false));
      throw e;
    }
  };
  return {
    interest,
    doInterest,
  };
};
export default slices.reducer;
