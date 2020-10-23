// data
import React from "react";

// style

// components

export default function Weather(props) {
  return (
    <section className={props.createClass(props.content)}>
      {props.content.parts.map((item, i) => {
        return props.createElement(item, i);
      })}
    </section>
  );
}
