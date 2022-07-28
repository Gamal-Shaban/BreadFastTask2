import {configureStore} from '@reduxjs/toolkit';
import appStateReducer from './slices/appStateSlice';
import postsReducer from './slices/postsSlice';
import commentsReducer from './slices/commetsSlice';

export const store = configureStore({
  reducer: {
    appState: appStateReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
