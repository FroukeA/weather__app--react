// data
import React from "react";

// functions
import {
  mergeDataElement,
  mergeDataElementItems
} from "../../data/dataProcessing";

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
let handleRef = null;

function handleRenderElements(item, key) {
  if (item.parts.length > 0) {
    // Nested DOM
    if (item.type === "card") {
      renderComponent(item, "", null, load, handleRef);
    } else {
      return (
        <item.element
          key={item.id + key}
          className={createClass(item)}
          ref={(item.needRef ? handleRef : null)}
        >
          {renderElementItems(item.parts, handleRef)}
        </item.element>
      );
    }
  } else {
    // Single DOM
    if (
      item.type === "description" ||
      item.type === "term" ||
      item.type === "textItem" ||
      item.type === "button" ||
      item.type === "customBoxInput" ||
      item.type === "loader"
    ) {
      return renderComponent(item, key, null, null, handleRef);
    } else {
      renderElement(item, key, handleRef);
    }
  }
}

export function createElement(handle, item, key) {
  handleRef = handle

  return handleRenderElements(item, key);
}

function handleMergeDataElements(item, key, handleData) {
  if (item.parts.length > 0) {
    // Nested DOM
    mergeDataElementItems(item, key, handleData)
  } else {
    // Single DOM
    mergeDataElement(item, key, handleData);
  }
}

export function createDataElement(item, handleData) {
  return handleMergeDataElements(item, handleData);
}