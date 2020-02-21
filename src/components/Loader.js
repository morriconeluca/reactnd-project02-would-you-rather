import React from 'react';

import Spinner from './Spinner';

export default function Loader() {
  return (
    <div
      className="loader centralize"
    >
      <Spinner />
      Loading...
    </div>
  );
}