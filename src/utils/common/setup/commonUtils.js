// data
import React from "react";

// functions
import { } from "../../data/dataProcessing";
import {
  renderComponent,
  renderElementItems,
  renderElement
}
  from "../../data/dataRendering";
import { createClass } from "../../data/dataStyling";

// components

// variables
let load = true;

function handleRenderElements(item, key) {
  if (item.parts.length > 0) {
    // Nested DOM
    if (item.type === "card") {
      renderComponent(item, "", null, null, load);
    } else {
      return (
        <item.element key={key} className={createClass(item)}>
          {renderElementItems(item.parts)}
        </item.element>
      );
    }
  } else {
    // Single DOM
    if (
      item.type === "discription" ||
      item.type === "term" ||
      item.type === "textItem" ||
      item.type === "button" ||
      item.type === "customBoxInput"
    ) {
      renderComponent(item, key, null);
    } else {
      renderElement(item, key);
    }
  }
}

export function createElement(item, key) {
  return handleRenderElements(item, key)
  // if (load) {
  //   return <h3>loading</h3>
  // }
}