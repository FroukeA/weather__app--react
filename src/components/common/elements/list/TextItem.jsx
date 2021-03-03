// data
import React from "react";

// functions

// style

// components

export default function TextItem(props) {
  return (
    <li
      className={props.class}
    >
      {props.item.label}
    </li>
  )
}
