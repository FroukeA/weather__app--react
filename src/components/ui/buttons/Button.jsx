// data
import React from "react";

// functions

// style

// components

export default function Button(props) {
  return (
    <button
      className={"button " + props.class}
      data-ref={props.reference}
      type={props.type}
      name={props.name}
      id={props.id ? props.id : ""}
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      disabled={props.disabled === false ? true : false}
    >
      <p>
        <span>{props.label}</span>
      </p>
    </button>
  );
}
