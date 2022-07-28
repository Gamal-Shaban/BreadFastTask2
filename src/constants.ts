export interface initialStatesType {
  appState: {
    isLoaded: boolean;
  };
  posts: {
    isLoading: boolean;
    postsData: PostDetailsType[];
    selectedPost: PostDetailsType | null;
  };
}

export interface PostDetailsType {
  id: string;
  user_id: string;
  title: string;
  body: string;
}
