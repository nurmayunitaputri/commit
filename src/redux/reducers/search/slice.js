import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

const slices = createSlice({
  initialState,
  name: "search",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },

    toggleError(state, action) {
      Object.assign(state, {
        ...state,
        error: action.payload,
      });
    },

    setDataUsers(state, action) {
      Object.assign(state, {
        ...state,
        users: action.payload,
      });
    },
  },
});

const { toggleLoading, toggleError, setDataUsers } = slices.actions;

export const useSearchDispatcher = () => {
  const { search } = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchUsers = async ({ query }) => {
    try {
      dispatch(toggleError(false));
      dispatch(setDataUsers([]));
      dispatch(toggleLoading(true));

      const response = await callAPI({
        url: "/user/list",
        method: "GET",
        params: {
          fullname: query.toLowerCase(),
        },
      });

      if (response.data.data) {
        dispatch(setDataUsers(response.data.data));
      }
      dispatch(toggleLoading(false));
    } catch (error) {
      console.log({ error });
      dispatch(toggleLoading(false));
      dispatch(toggleError(true));
    }
  };

  return {
    search,
    searchUsers,
  };
};

export default slices.reducer;
