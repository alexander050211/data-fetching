import './App.css';

import { useEffect, useState } from 'react';

import PostDetail from './components/PostDetail';
import PostList from './components/PostList';
import type { Post } from './types';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostID, setSelectedPostID] = useState<number>(1);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: Post[]) => {
        setPosts(data);
        if (data[0] === undefined) return;
        setSelectedPostID(data[0].id);
      })
      .catch((error: unknown) => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="container">
      <div className="left-pane">
        <PostList
          posts={posts}
          selectedPostID={selectedPostID}
          onSelectPost={setSelectedPostID}
        />
      </div>
      <div className="right-pane">{<PostDetail postId={selectedPostID} />}</div>
    </div>
  );
}

export default App;
