// data
import React from "react";

// functions

// style

// components

export default function Textdescription(props) {
  return (
    <dd
      className={props.class}
      ref={props.myref}
    >
      { props.item.label}
    </dd >
  )
}
