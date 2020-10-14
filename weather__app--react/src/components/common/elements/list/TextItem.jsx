import React from "react";

export default function TextItem(props) {
  return <li className={props.class}>{props.item.label}</li>;
}
