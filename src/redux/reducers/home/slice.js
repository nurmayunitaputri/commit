import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
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
    toggleLike(state, action) {
      Object.assign(state, {
        ...state,
        posts: state.posts.data.map((post) => ({
          ...post,
          liked:
            action.payload.postId === post.post_id
              ? action.payload.value
              : post.liked,
        })),
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
  toggleLike,
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

  const fetchPosts = async () => {
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

  const refreshPosts = async () => {
    try {
      const response = await callAPI({
        url: "/post/list",
        method: "GET",
      });

      const { data } = response;
      if (data.data) {
        dispatch(setPosts(data.data.reverse()));
      }
    } catch (error) {}
  };

  const fetchProfile = async () => {
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

  const likeAction = async ({ postId, status }) => {
    const url = `/post/${status}/${postId}`;
    try {
      const response = await callAPI({
        url,
        method: "POST",
      });

      if (response.data.status === "404") {
        alert(`Failed to ${status} post`);
        return;
      }
      refreshPosts();
      // dispatch(
      //   toggleLike({ postId, status: status === "like" ? true : false })
      // );
    } catch (error) {
      alert(`Failed to ${status} post`);
    }
  };

  const deletePost = async ({ postId }) => {
    try {
      const response = await callAPI({
        url: `/post/delete/${postId}`,
        method: "DELETE",
      });

      if (response.data.status === "404") {
        // toast("Failed to delete post");
        return;
      }
      refreshPosts();
    } catch (error) {
      // toast("Failed to delete post");
    }
  };

  return {
    home,
    doHome,
    fetchPosts,
    fetchProfile,
    likeAction,
    deletePost,
  };
};
export default slices.reducer;
