import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialState = {
  profile: null,
  posts: [],
  loading: false,
  error: false,
};

const slices = createSlice({
  initialState,
  name: "profileuser",
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

    setProfile(state, action) {
      Object.assign(state, {
        ...state,
        profile: action.payload,
      });
    },

    setPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: action.payload,
      });
    },
  },
});

const { toggleLoading, toggleError, setProfile, setPosts } = slices.actions;

export const useProfileUserDispatcher = () => {
  const { profileuser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProfile = async ({ userId }) => {
    try {
      dispatch(toggleLoading(true));

      const response = await callAPI({
        url: `/user/detail/${userId}`,
        method: "GET",
      });

      if (response.data.data) {
        dispatch(setProfile(response.data.data.detail_profile));
        dispatch(setPosts(response.data.data.post_user));
      }
      dispatch(toggleLoading(false));
    } catch (error) {
      console.log({ error });
      dispatch(toggleError(true));
    }
  };

  const refreshProfile = async ({ userId }) => {
    const response = await callAPI({
      url: `/user/detail/${userId}`,
      method: "GET",
    });

    if (response.data.data) {
      dispatch(setProfile(response.data.data.detail_profile));
      dispatch(setPosts(response.data.data.post_user));
    }
  };

  return {
    profileuser,
    fetchProfile,
    refreshProfile,
  };
};

export default slices.reducer;
