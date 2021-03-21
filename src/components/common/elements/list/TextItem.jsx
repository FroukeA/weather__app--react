// data
import React from "react";

// functions

// style

// components

export default function TextItem(props) {
  return (
    <li
      className={props.class}
      ref={props.myref}
    >
      { props.item.label}
    </li >
  )
}
