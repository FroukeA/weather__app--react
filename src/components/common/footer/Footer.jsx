// data
import React from "react";

// functions

// style

// components

export default function Footer(props) {
  return (
    <React.Fragment>
      <footer
        className={props.createClass(props.content)}
        ref={props.myref}
      >
        {props.content.parts.map((item, i) => {
          return props.createElement(item, i);
        })}
      </footer>
    </React.Fragment >
  );
}