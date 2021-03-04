// data
import React from "react";

// functions

// style

// components

export default function Input(props) {
  return (
    <input
      className={props.class}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder || ""}
      onChange={props.onChange}
      required={props.required === "true" ? true : false}
      checked={props.checked}
    />
  );
}
