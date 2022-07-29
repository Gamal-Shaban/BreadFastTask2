export interface initialStatesType {
  appState: {
    isLoaded: boolean;
  };
  posts: {
    isLoading: boolean;
    postsData: PostDetailsType[];
  };
  postDetails: {
    isLoading: boolean;
    postDetailsData?: PostDetailsType | {};
    commentsLoading: boolean;
    commentsData?: CommentType[] | [];
  };
}

export interface PostDetailsType {
  id: string;
  user_id: string;
  title: string;
  body: string;
}

export interface CommentType {
  id: string;
  post_id: string;
  name: string;
  email: string;
  body: string;
}
