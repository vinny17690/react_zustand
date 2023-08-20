import * as React from 'react';
import { useCountStore } from './store';

// Count component
export function Count() {
  const count = useCountStore(state => state.count);
  return <p className="fs-1 text-center">{count}</p>;
}
