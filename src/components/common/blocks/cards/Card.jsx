// data
import React from "react";

// functions

// style

// components

export default function Card(props) {
  return (
    <div
      className={`card shadow p-3 bg-white rounded ${props.createClass(
        props.content
      )}`}
    >
      <div className="cardbody">
        {props.createElement(props.content.parts[0], "card")}
      </div>
    </div>
  );
}
