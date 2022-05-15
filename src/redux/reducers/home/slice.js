import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialStatePosts = {
  loading: false,
  data: [],
};

const initialStateProfile = {
  loading: false,
  data: {
    id: 0,
    username: "",
    phone_number: "",
    profile_pic: null,
    region: "",
    status: "",
    passion: "",
    bio: "",
    total_followers: 0,
    total_following: 0,
    is_follow: false,
    gender: "",
    fullname: "",
  },
};

const initialState = {
  loading: false,
  posts: initialStatePosts,
  profile: initialStateProfile,
};

const slices = createSlice({
  initialState,
  name: "home",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
    toggleLoadingPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: {
          ...state.posts,
          loading: action.payload,
        },
      });
    },
    setPosts(state, action) {
      Object.assign(state, {
        ...state,
        posts: {
          ...state.posts,
          data: action.payload,
        },
      });
    },
    toggleLoadingProfile(state, action) {
      Object.assign(state, {
        ...state,
        profile: {
          ...state.profile,
          loading: action.payload,
        },
      });
    },
    setProfile(state, action) {
      Object.assign(state, {
        ...state,
        profile: {
          ...state.profile,
          data: action.payload,
        },
      });
    },
  },
});

const {
  toggleLoading,
  setPosts,
  toggleLoadingPosts,
  setProfile,
  toggleLoadingProfile,
} = slices.actions;
export const useHomeDispatcher = () => {
  const { home } = useSelector((state) => state);
  const dispatch = useDispatch();

  const doHome = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: "/register",
      method: "POST",
      data: values,
    });
    const { data } = response;

    dispatch(toggleLoading(false));
  };

  const fetchPosts = async (values) => {
    try {
      toggleLoadingPosts(true);
      const response = await callAPI({
        url: "/post/list",
        method: "GET",
      });

      const { data } = response;
      if (data.data) {
        dispatch(setPosts(data.data.reverse()));
      }
      dispatch(toggleLoadingPosts(false));
    } catch (error) {
      dispatch(toggleLoadingPosts(false));
    }
  };

  const fetchProfile = async (values) => {
    try {
      toggleLoadingProfile(true);
      const response = await callAPI({
        url: "/user/detail-profile",
        method: "GET",
      });

      const { data } = response;
      if (data.data) {
        dispatch(setProfile(data.data));
      }
      dispatch(toggleLoadingProfile(false));
    } catch (error) {
      dispatch(toggleLoadingProfile(false));
    }
  };

  return {
    home,
    doHome,
    fetchPosts,
    fetchProfile,
  };
};
export default slices.reducer;
