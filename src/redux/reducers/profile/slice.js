import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialState = {
  loading: false,
  error: false,
  data: {
    postsUsers: [],
    detailProfile: null,
  },
};

const slices = createSlice({
  initialState,
  name: "profile",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    setData(state, action) {
      Object.assign(state, {
        ...state,
        data: action.payload,
      });
    },
    toggleError(state, action) {
      Object.assign(state, {
        ...state,
        error: true,
      });
    },
  },
});

const { toggleLoading, toggleError, setData } = slices.actions;
export const useProfileDispatcher = () => {
  const { profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      dispatch(toggleLoading(true));
      const currentUser = JSON.parse(localStorage.getItem("user"));
      const response = await callAPI({
        url: `/user/detail/${currentUser.id}`,
        method: "GET",
      });

      const { data } = response;
      if (data.data) {
        dispatch(
          setData({
            postsUser: data.data.post_user
              ? data.data.post_user.reverse()
              : data.data.post_user,
            detailProfile: data.data.detail_profile,
          })
        );
      }
      dispatch(toggleLoading(false));
    } catch (error) {
      console.log({ error });
      dispatch(toggleError(false));
    }
  };

  const refreshProfile = async () => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    const response = await callAPI({
      url: `/user/detail/${currentUser.id}`,
      method: "GET",
    });

    const { data } = response;
    if (data.data) {
      dispatch(
        setData({
          postsUser: data.data.post_user.reverse(),
          detailProfile: data.data.detail_profile,
        })
      );
    }
  };

  return {
    profile,
    fetchProfile,
    refreshProfile,
  };
};
export default slices.reducer;
