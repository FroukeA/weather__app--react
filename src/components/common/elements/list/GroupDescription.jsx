// data
import React from "react";

// functions

// style

// components

export default function Groupdescription(props) {
  return (
    <dd
      ref={props.myref}
    >
      { props.createElement(props.item.parts[0], "groupdd")}
    </dd >
  );
}
