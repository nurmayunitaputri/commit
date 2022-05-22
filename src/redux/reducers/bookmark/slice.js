import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { callAPI } from "../../../helpers/network";

const initialState = {
  data: [],
  loading: false,
  error: false,
  bookmarkActionLoading: false,
};

const slices = createSlice({
  initialState,
  name: " bookmark",
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },

    toggleActionLoading(state, action) {
      Object.assign(state, {
        ...state,
        bookmarkActionLoading: action.payload,
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

const { toggleLoading, toggleActionLoading, toggleError, setData } =
  slices.actions;

export const useBookmarkDispatcher = () => {
  const { bookmark } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchBookmarks = async () => {
    try {
      dispatch(toggleLoading(true));

      const response = await callAPI({
        url: "/bookmark/list",
        method: "GET",
      });

      if (response.data.data) {
        setData(res.data.data);
      }
      dispatch(toggleLoading(false));
    } catch (error) {
      dispatch(toggleError(true));
    }
  };

  const saveToBookmark = async ({ postId }) => {
    dispatch(toggleActionLoading(true));
    try {
      const response = await callAPI({
        url: `/bookmark/save/${postId}`,
        method: "POST",
      });
      if (response.data.status == "200") {
        fetchBookmarks();
      } else {
        throw response.data.message || "Something went wrong";
      }
    } catch (error) {
      dispatch(toggleActionLoading(false));
    }
  };

  const deleteFromBookmark = async ({ postId }) => {
    dispatch(toggleActionLoading(true));
    try {
      const response = await callAPI({
        url: `/bookmark/delete/${postId}`,
        method: "DELETE",
      });
      if (response.data.status == "200") {
        fetchBookmarks();
      } else {
        throw response.data.message || "Something went wrong";
      }
    } catch (error) {
      dispatch(toggleActionLoading(false));
    }
  };

  return {
    bookmark,
    fetchBookmarks,
    saveToBookmark,
    deleteFromBookmark,
  };
};

export default slices.reducer;
