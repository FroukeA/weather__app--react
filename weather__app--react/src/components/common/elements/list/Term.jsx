import React from "react";

export default function Term(props) {
  return <dt className={props.class}>{props.item.label}</dt>;
}
