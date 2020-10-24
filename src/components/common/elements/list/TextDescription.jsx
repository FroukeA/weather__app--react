import React from "react";

export default function Textdescription(props) {
  return <dd className={props.class}>{props.item.label}</dd>;
}
