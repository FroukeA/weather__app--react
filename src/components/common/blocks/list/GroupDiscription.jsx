import React from "react";

export default function GroupDiscription(props) {
  return (
    <dd>{props.createElement(props.item.parts[0], "groupdd", props.data)}</dd>
  );
}
