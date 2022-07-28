import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';
import storeInitialState from '../storeInitialState';

export const fetchPosts = createAsyncThunk('posts', async () => {
  try {
    const response = await axios.get('https://gorest.co.in/public/v2/posts');
    return response.data;
  } catch (err: any) {
    if (!err.response) {
      throw err;
    }
    return isRejectedWithValue(err.response.data);
  }
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState: storeInitialState.posts,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    resetSelectedPost: state => {
      state.selectedPost = null;
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postsData = action.payload;
      }),
      builder.addCase(fetchPosts.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const {setSelectedPost, resetSelectedPost} = postsSlice.actions;

export default postsSlice.reducer;
