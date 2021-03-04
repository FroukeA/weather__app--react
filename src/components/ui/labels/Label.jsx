// data
import React from "react";

// functions

// style

// components

export default function Label(props) {
  return (
    <label
      className={""}
      htmlFor={props.htmlFor}
    >
      <span
        className={props.className}
      >
        {props.labelText}
      </span>
    </label>
  );
}
