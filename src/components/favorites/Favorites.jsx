// data
import React from "react";

// functions

// style

// components

export default function Favorites(props) {
  return (
    (Object.keys(props.content).length !== 0 ? <React.Fragment>
      <section className={props.createClass(props.content)}>
        {props.content.parts.map((item, i) => {
          return props.createElement(item, i);
        })}
      </section>
    </React.Fragment>
      : null)
  );
}