import React from 'react';
import { usePostStore } from './store';

const ClearPostsOG = () => {
    const clearPosts = usePostStore(state => state.clearPosts);
   return <button onClick={clearPosts} className="btn btn-danger text-uppercase fw-bold">Clear Posts</button>
}

export const ClearPosts = React.memo(ClearPostsOG)