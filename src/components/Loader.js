import React from 'react';

export default function Loader({position}) {
  const style = {
    position
  };

  return (
    <div
      className="loader centralize"
      style={style}
    >Loading...</div>
  );
}