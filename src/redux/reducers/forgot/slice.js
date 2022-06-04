import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: "forgot",
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
export const useForgotDispatcher = () => {
  const { forgot } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doForgot = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: "/forget-password/resend",
      method: "POST",
      data: values,
    });
    const { data } = response;
    if (data.status == "404") {
      dispatch(toggleLoading(false));
      throw new Error("User not found");
    }

    // localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    forgot,
    doForgot,
  };
};
export default slices.reducer;
