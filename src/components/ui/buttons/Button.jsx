// data
import React from "react";

// functions

// style

// components

export default function Button(props) {
  return (
    <button
      className={"button " + props.class}
      reference={props.reference !== null || props.reference !== undefined ? props.reference : null}
      type={props.type !== null || props.type !== undefined ? props.type : null}
      name={props.name !== null || props.name !== undefined ? props.name : null}
      id={props.id}
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      disabled={props.disabled === false ? true : false}
      ref={props.myref}
    >
      <p>
        <span>{props.label}</span>
      </p>
    </button >
  );
}
