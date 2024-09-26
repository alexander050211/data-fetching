export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type PostListProps = {
  posts: Post[];
  selectedPostID: number;
  onSelectPost: (id: number) => void;
};

export type PostDetailProps = {
  postId: number;
};
