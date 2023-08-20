import { ClearPosts } from './ClearPosts';
import { usePostStore } from './store';

export function FetchPosts() {
  const fetchPosts = usePostStore(state => state.setPosts);
  const isFetching = usePostStore(state => state.isFetching);
  return (
    <>
      <p className="fs-2 text-center">Fetch top 100 posts</p>
      <div className="row">
        <div className="col">
          <button
            onClick={() => fetchPosts({ count: 7, greeting: 'Hello Store' })}
            className="btn btn-primary text-uppercase fw-bold"
            disable={isFetching ? 'true' : 'false'}
          >
            {isFetching ? 'Fetching...' : 'Fetch Posts'}
          </button>
        </div>
        <div className="col">
          <ClearPosts />
        </div>
      </div>
    </>
  )
}