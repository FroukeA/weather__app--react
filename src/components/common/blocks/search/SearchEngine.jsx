// data
import React from "react";

// functions

// style

// components

export default function SearchEngine(props) {
  return (
    <section className={props.createClass(props.content)}>
      {props.content.parts.map((item, i) => {
        return props.createElement(item, i);
      })}
    </section>
  );
}