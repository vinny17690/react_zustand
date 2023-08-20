import * as React from 'react';
import { useCountStore, usePostStore } from './store';
import './App.css';
import { Posts } from './Posts';
import { Count } from './Count';
import { FetchPosts } from './FetchPosts';

// Root component (APP)
export default function App() {
  const inc = useCountStore(state => state.inc);

  return (
    <div className="container my-5 justify-items-center">
      <div className="row align-items-center" style={{ height: '10rem' }}>
        <div className="col col-sm-4 card align-items-center">
          <Count />
          <button onClick={inc} className="btn btn-primary text-uppercase fw-bold">Increment</button>
        </div>
        <div className="col card align-items-center ms-3 align-content-center">
          <FetchPosts />
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


