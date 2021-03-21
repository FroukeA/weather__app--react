// data
import React from "react";

// functions

// style

// components

export default function Forecast(props) {
  return (
    <section
      className={props.createClass(props.content)}
      ref={props.myref}
    >
      {
        props.content.parts.map((item, i) => {
          return props.createElement(item, i);
        })
      }
    </section >
  );
}
