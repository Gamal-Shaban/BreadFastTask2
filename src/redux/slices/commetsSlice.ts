import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';
import storeInitialState from '../storeInitialState';

export const fetchComments = createAsyncThunk('comments', async () => {
  try {
    const response = await axios.get('https://gorest.co.in/public/v2/comments');
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return isRejectedWithValue(err.response.data);
  }
});

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: storeInitialState.comments,
  reducers: {
    resetComments: state => {
      state.commentsData = [];
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchComments.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.commentsData = action.payload;
    });
    builder.addCase(fetchComments.rejected, state => {
      state.isLoading = false;
    });
  },
});

export const {resetComments} = commentsSlice.actions;

export default commentsSlice.reducer;
