import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const slices = createSlice({
  initialState,
  name: "suggestedPeople",
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

    setData(state, action) {
      Object.assign(state, {
        ...state,
        data: action.payload,
      });
    },
  },
});

const { toggleLoading, toggleError, setData } = slices.actions;

export const useSuggestedPeopleDispatcher = () => {
  const dispatch = useDispatch();
  const { suggestedPeople } = useSelector((state) => state);

  const fetchSuggestedPeople = async () => {
    dispatch(toggleLoading(true));
    try {
      const response = await callAPI({
        url: "/user/sugested",
        method: "GET",
      });

      if (response.data.data) {
        dispatch(setData(response.data.data));
        dispatch(toggleLoading(false));
      } else {
        throw response.data.message || "Something went wrong";
      }
    } catch (error) {
      dispatch(toggleLoading(false));
      dispatch(toggleError(true));
    }
  };

  const refreshSuggestedPeople = async () => {
    const response = await callAPI({
      url: "/user/sugested",
      method: "GET",
    });

    if (response.data.data) {
      dispatch(setData(response.data.data));
      dispatch(toggleLoading(false));
    }
  };

  return {
    suggestedPeople,
    fetchSuggestedPeople,
    refreshSuggestedPeople,
  };
};

export default slices.reducer;
