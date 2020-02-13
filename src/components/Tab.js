import React from 'react';

export default function Tab(props) {
  return (
    <button
      className={`tab${props.active ? '' : ' active'}`}
      onClick={e => {
        e.preventDefault();
        props.handleClick(props.value);
      }}
      disabled={!props.active}
    >{props.children}</button>
  );
}