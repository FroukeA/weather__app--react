import React from "react";

export default function TextDiscription(props) {
  return <dd className={props.class}>{props.item.label}</dd>;
}
