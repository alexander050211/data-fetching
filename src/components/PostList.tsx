import type { PostListProps } from '../types';

function PostList({ posts, selectedPostID, onSelectPost }: PostListProps) {
  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li
          key={post.id}
          onClick={() => {
            onSelectPost(post.id);
          }}
          className={
            post.id === selectedPostID ? 'post-item selected' : 'post-item'
          }
        >
          <b>{post.id}.</b> {post.title}
        </li>
      ))}
    </ul>
  );
}

export default PostList;
