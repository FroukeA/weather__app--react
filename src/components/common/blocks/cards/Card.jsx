import React from "react";

export default function Card(props) {
  return (
    <div
      className={`card shadow p-3 bg-white rounded ${props.createClass(
        props.content
      )}`}
    >
      <div className="cardbody">
        {/* function to loop over content */}
        {/* <p>pain in the butt card is comming</p> */}
        {props.createElement(props.content.parts[0], "card")}
      </div>
    </div>
  );
}
