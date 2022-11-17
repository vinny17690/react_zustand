import * as React from 'react';
import { useCountStore, usePostStore } from './store';
import './App.css';

// Root component (APP)
export default function App() {
  const inc = useCountStore(state => state.inc);
  const fetchPosts = usePostStore(state => state.setPosts);
  const clearPosts = usePostStore(state => state.clearPosts);

  return (
    <div className="container my-5 justify-items-center">
      <div className="row align-items-center" style={{ height: '10rem' }}>
        <div className="col col-sm-4 card align-items-center">
          <Count />
          <button onClick={inc} className="btn btn-primary text-uppercase fw-bold">Increment</button>
        </div>
        <div className="col card align-items-center ms-3 align-content-center">
          <p className="fs-2 text-center">Fetch top 100 posts</p>
          <div className="row">
            <div className="col">
              <button onClick={() => fetchPosts({ count: 7, greeting: 'Hello Store' })} className="btn btn-primary text-uppercase fw-bold">Fetch Posts</button>
            </div>
            <div className="col">
              <button onClick={clearPosts} className="btn btn-danger text-uppercase fw-bold">Clear Posts</button>
            </div>
          </div>
        </div>
      </div>
      {/* Just displaying counter value in a random place to observe DOM updates */}
      <Count />
      <div className="row card p-3 my-3">
        <Posts />
      </div>
    </div>
  );
}

// Count component
function Count() {
  const count = useCountStore(state => state.count);
  return <p className="fs-1 text-center">{count}</p>
}

// Posts component
function Posts() {
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
  )
}