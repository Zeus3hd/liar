export interface IPost {
  email: string;
  id: string;
  userId: string;
  realQuestion: string;
  fakeQuestion: string;
  isRevealed: boolean;
  comments: IComment[];
  avatar: string;
}

export interface IComment {
  commentText: string;
  id: string;
  username: string;
}
