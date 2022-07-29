import {initialStatesType} from '../types';

const initialStates: initialStatesType = {
  appState: {
    isLoaded: false,
  },
  posts: {
    isLoading: true,
    postsData: [],
  },
  postDetails: {
    isLoading: true,
    postDetailsData: {},
    commentsLoading: true,
    commentsData: [],
  },
};

export default initialStates;
