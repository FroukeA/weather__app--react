// data
import React from "react";

// functions

// style

// components

export default function Loader(props) {
  return (
    <div
      className="loader__ripple"
      ref={props.myref}
    >
      <div></div>
      <div></div>
    </div >
  );
}