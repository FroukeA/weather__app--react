// data
import React from "react";

// functions

// style

// components

export default function SmallText(props) {
  return (
    <p
      ref={props.myref}
    >
      { props.item.label}
    </p >
  )
}
