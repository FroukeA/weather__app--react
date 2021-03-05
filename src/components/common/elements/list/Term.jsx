// data
import React from "react";

// functions

// style

// components

export default function Term(props) {
  return (
    <dt
      className={props.class}
    >
      {props.item.label}
    </dt>
  )
}