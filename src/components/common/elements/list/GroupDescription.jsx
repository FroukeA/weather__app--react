// data
import React from "react";

// functions

// style

// components

export default function Groupdescription(props) {
  return (
    <dd>
      {props.createElement(props.item.parts[0], "groupdd", props.data)}
    </dd>
  );
}
