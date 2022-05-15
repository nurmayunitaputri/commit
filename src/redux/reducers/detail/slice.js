import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialCommentActionState = {
  loading: false,
};

const initialState = {
  loading: false,
  data: null,
  error: false,
  commentAction: initialCommentActionState,
};
const slices = createSlice({
  initialState,
  name: "detail",
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
        loading: false,
        error: false,
      });
    },
    toggleLoadingComment(state, action) {
      Object.assign(state, {
        ...state,
        commentAction: {
          ...state.commentAction,
          loading: action.payload,
        },
      });
    },
  },
});
const { toggleLoading, toggleError, setData, toggleLoadingComment } =
  slices.actions;

export const useDetailDispatcher = () => {
  const { detail } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchDetail = async (postId) => {
    dispatch(toggleLoading(true));
    try {
      const response = await callAPI({
        url: `/post/detail/${postId}`,
        method: "GET",
      });

      if (response.data) {
        if (response.data.status == "404") {
          dispatch(toggleError(true));
          dispatch(toggleLoading(false));
          return;
        } else {
          dispatch(setData(response.data.data));
        }
      }
    } catch (error) {
      dispatch(toggleError(true));
      dispatch(toggleLoading(false));
    }
  };

  const refreshDetail = async (postId) => {
    try {
      const response = await callAPI({
        url: `/post/detail/${postId}`,
        method: "GET",
      });

      if (response.data) {
        if (response.data.status == "404") {
          return;
        } else {
          dispatch(setData(response.data.data));
        }
      }
    } catch (error) {}
  };

  const postComment = async ({ postId, comment }) => {
    const formData = new FormData();
    formData.append("isiKomentar", comment);

    dispatch(toggleLoadingComment(true));
    try {
      const response = await callAPI({
        url: `/komentar/insert/${postId}`,
        method: "POST",
        data: formData,
      });

      if (response.data) {
        if (response.data.status != "200") {
          dispatch(toggleLoadingComment(false));
          throw "Failed to add comment";
        } else {
          dispatch(toggleLoadingComment(false));
        }
      }
    } catch (error) {
      dispatch(toggleLoadingComment(false));
      throw error;
    }
  };

  return {
    detail,
    fetchDetail,
    refreshDetail,
    postComment,
  };
};
export default slices.reducer;
