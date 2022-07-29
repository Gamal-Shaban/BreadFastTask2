import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';
import storeInitialState from '../storeInitialState';

export const fetchComments = createAsyncThunk(
  'comments',
  async (postId: number) => {
    try {
      const response = await axios.get(
        `https://gorest.co.in//public/v2/posts/${postId}/comments`,
      );
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return isRejectedWithValue(err.response.data);
    }
  },
);

export const fetchPostDetails = createAsyncThunk(
  'postDetails',
  async (postId: number) => {
    try {
      const response = await axios.get(
        `https://gorest.co.in/public/v2/posts/${postId}`,
      );
      return response.data;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return isRejectedWithValue(err.response.data);
    }
  },
);

export const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState: storeInitialState.postDetails,
  reducers: {
    resetPostDetails: state => {
      console.log({state});
      state.postDetailsData = {};
      state.commentsData = [];
    },
  },
  extraReducers: builder => {
    // postDetails request reducer
    builder.addCase(fetchPostDetails.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.postDetailsData = action.payload;
    });
    builder.addCase(fetchPostDetails.rejected, state => {
      state.isLoading = false;
    });

    // comments request reducer
    builder.addCase(fetchComments.pending, state => {
      state.commentsLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.commentsLoading = false;
      state.commentsData = action.payload;
    });
    builder.addCase(fetchComments.rejected, state => {
      state.commentsLoading = false;
    });
  },
});

export const {resetPostDetails} = postDetailsSlice.actions;

export default postDetailsSlice.reducer;
