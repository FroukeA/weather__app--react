// data
import React from "react";

// functions

// style

// components

export default function Button(props) {
  return (
    <button
      className={"button " + props.class}
      data-ref={props.reference !== null || props.reference !== undefined ? props.reference : null}
      type={props.type !== null || props.type !== undefined ? props.type : null}
      name={props.name !== null || props.name !== undefined ? props.name : null}
      id={props.id}
      // onSubmit={props.onSubmit !== null || props.onSubmit !== undefined ? props.onSubmit : null}
      // onClick={props.onClick !== null || props.onClick !== undefined ? () => () => this.props.onClick : null}
      // onclick={"console.log('The link was clicked.'); return false"}
      onSubmit={props.onSubmit}
      onClick={props.onClick}
      disabled={props.disabled === false ? true : false}
    >
      <p>
        <span>{props.label}</span>
      </p>
    </button >
  );
}
