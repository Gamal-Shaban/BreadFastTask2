import {initialStatesType} from '../constants';

const initialStates: initialStatesType = {
  appState: {
    isLoaded: false,
  },
  posts: {
    isLoading: true,
    postsData: [],
    selectedPost: null,
  },
  comments: {
    isLoading: true,
    commentsData: [],
  },
};

export default initialStates;
