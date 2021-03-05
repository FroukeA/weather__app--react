// data
import React from "react";

// functions

// style

// components

export default function Term(props) {
  console.log('here term')
  return (
    <dt
      className={props.class}
    >
      {props.item.label}
    </dt>
  )
}