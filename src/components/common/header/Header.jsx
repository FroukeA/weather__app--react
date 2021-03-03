// data
import React from "react";

// functions

// style

// components

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={props.createClass(props.content)}>
        {props.content.parts.map((item, i) => {
          return props.createElement(item, i);
        })}
      </header>
    </React.Fragment>
  );
}
