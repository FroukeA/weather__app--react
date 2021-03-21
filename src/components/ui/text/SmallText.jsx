// data
import React from "react";

// functions

// style

// components

export default function SmallText(props) {
  return (
    <small
      ref={props.myref}
    >
      { props.item.label}
    </small >
  )
}
