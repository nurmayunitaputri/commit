import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { callAPI } from "../../../helpers/network";

const initialStatePosts = {
  loading: false,
  data: [],
};

const initialState = {
  filter: null,
  official: initialStatePosts,
  verified: initialStatePosts,
};

const slices = createSlice({
  initialState,
  name: "simpler",
  reducers: {
    toggleLoadingOfficial(state, action) {
      Object.assign(state, {
        ...state,
        official: {
          ...state.official,
          loading: action.payload,
        },
      });
    },
    toggleLoadingVerified(state, action) {
      Object.assign(state, {
        ...state,
        verified: {
          ...state.verified,
          loading: action.payload,
        },
      });
    },
    setDataOfficial(state, action) {
      Object.assign(state, {
        ...state,
        official: {
          ...state.official,
          data: action.payload,
        },
      });
    },
    setDataVerified(state, action) {
      Object.assign(state, {
        ...state,
        verified: {
          ...state.verified,
          data: action.payload,
        },
      });
    },
    setFilter(state, action) {
      Object.assign(state, {
        ...state,
        filter: action.payload,
      });
    },
  },
});

const {
  toggleLoadingOfficial,
  toggleLoadingVerified,
  setDataOfficial,
  setDataVerified,
  setFilter,
} = slices.actions;
export const useSimplerDispatcher = () => {
  const { simpler } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchPostsOfficial = async () => {
    try {
      const params = {};
      if (simpler.filter) {
        params.tags = simpler.filter;
      }
      toggleLoadingOfficial(true);
      const response = await callAPI({
        url: "/post/list-simpler/official",
        method: "GET",
        params,
      });

      const { data } = response;
      if (data.data) {
        dispatch(setDataOfficial(data.data.reverse()));
      }
      dispatch(toggleLoadingOfficial(false));
    } catch (error) {
      if (error?.response?.status === 404) {
        dispatch(setDataOfficial([]));
      }
      dispatch(toggleLoadingOfficial(false));
    }
  };

  const fetchPostsVerified = async () => {
    try {
      const params = {};
      if (simpler.filter) {
        params.tags = simpler.filter;
      }
      toggleLoadingVerified(true);
      const response = await callAPI({
        url: "/post/list-simpler/verified",
        method: "GET",
        params,
      });

      const { data } = response;
      if (data.data) {
        dispatch(setDataVerified(data.data.reverse()));
      }
      dispatch(toggleLoadingVerified(false));
    } catch (error) {
      if (error?.response?.status === 404) {
        dispatch(setDataVerified([]));
      }
      dispatch(toggleLoadingVerified(false));
    }
  };

  const refreshPosts = async () => {
    console.log({ simpler });
    const params = {};
    if (simpler.filter) {
      params.tags = simpler.filter;
    }
    let response = await callAPI({
      url: "/post/list-simpler/official",
      method: "GET",
      params,
    });

    let { data } = response;
    if (data.data) {
      dispatch(setDataOfficial(data.data.reverse()));
    }

    response = await callAPI({
      url: "/post/list-simpler/verified",
      method: "GET",
      params,
    });

    data = response.data;
    if (data.data) {
      dispatch(setDataVerified(data.data.reverse()));
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
        return;
      }
      refreshPosts();
    } catch (error) {}
  };

  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return {
    simpler,
    fetchPostsOfficial,
    fetchPostsVerified,
    likeAction,
    refreshPosts,
    deletePost,
    handleSetFilter,
  };
};
export default slices.reducer;
