import { useEffect, useState } from 'react';

import type { Comment, Post, PostDetailProps } from '../types';

function PostDetail({ postId }: PostDetailProps) {
  const [postContent, setPostContent] = useState<Post>();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data: Post) => {
        setPostContent(data);
      })
      .catch((error: unknown) => {
        console.error('Error fetching post content:', error);
      });
  }, [postId]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data: Comment[]) => {
        setComments(data);
      })
      .catch((error: unknown) => {
        console.error('Error fetching comments:', error);
      });
  }, [postId]);

  if (postContent === undefined) return <div>Loading post...</div>;

  return (
    <div className="post-detail">
      <h2>{postContent.title}</h2>
      <p>{postContent.body}</p>
      <h3>Comments</h3>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment.id} className="comment-item">
            <strong>{comment.name}</strong> ({comment.email})
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostDetail;
