// data
import React from "react";

// style

// components

export default function Forecast(props) {
  // if (props.content) {
  return (
    <section className={props.createClass(props.content)}>
      <h3>forecast</h3>
      {props.content.parts.map((item, i) => {
        return props.createElement(item, i);
      })}
    </section>
  );
  // } else {
  //   props.handle();
  //   return null;
  // }
}
