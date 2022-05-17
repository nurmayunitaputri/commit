import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: "login",
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
export const useLoginDispatcher = () => {
  const { login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doLogin = async (values) => {
    dispatch(toggleLoading(true));
    try {
      const response = await callAPI({
        url: "/login-user",
        method: "POST",
        data: values,
      });
      const { data } = response;
      console.log({ data });

      if (data.status != 200) {
        dispatch(toggleLoading(false));
        throw data.message || "Something went wrong";
      } else {
        localStorage.setItem("jwt", data.data.access_token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        dispatch(toggleLoading(false));
      }

      // if (!data.data.access_token) {
      //   console.log(`something wrong`);
      //   dispatch(toggleLoading(false));
      //   throw data.message || "Something went wrong";
      // } else {
      //   localStorage.setItem("jwt", data.data.access_token);
      //   localStorage.setItem("user", JSON.stringify(data.data.user));
      //   dispatch(toggleLoading(false));
      // }

      return data;
    } catch (e) {
      dispatch(toggleLoading(false));
      throw e;
    }
  };
  return {
    login,
    doLogin,
  };
};
export default slices.reducer;
