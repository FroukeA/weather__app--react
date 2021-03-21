// data
import React from "react";

// functions

// style

// components

export default function Term(props) {
  return (
    <dt
      className={props.class}
      ref={props.myref}
    >
      { props.item.label}
    </dt >
  )
}