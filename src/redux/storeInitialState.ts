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
};

export default initialStates;
