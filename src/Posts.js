import * as React from 'react';
import { usePostStore } from './store';

// Posts component
export function Posts() {
  const posts = usePostStore(state => state.posts);

  if (posts.length === 0) return <p>No Posts to display!</p>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
