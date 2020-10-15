import React from "react";
// import handleCreateFormArray from "./forms/forms";
import { } from "../data/dataProcessing";
import {
  renderComponent,
  renderElementItems,
  renderElement
}
  from "../data/dataRendering";
import { } from "../data/dataStyling";

// import { forms } from "../../constants/conf";
// import { forecast_data } from "../../constants/mock";

let structureCopy = null;
// let load = true;

function promiseRender(item, key) {
  if (item.parts.length > 0) {
    // Nested DOM
    if (item.type === "card") {
      return renderComponent(item, "", null, null);
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
      return renderComponent(item, key, null);
    } else {
      return renderElement(item, key);
    }
  }
}

export function createElement(item, key) {
  console.log(item, key);
  // if (load) {
  //   return <h3>loading</h3>
  // }

  // promiseRender(item, key)
  return promiseRender(item, key);
}

// add styling and SCSS
export function createClass(item) {
  let c = ``;

  if (item.ref) {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.ref}__${item.type} ${item.ref}__${item.type}--${e.label}`;
      });
    } else {
      c = `${item.ref}__${item.type}`;
    }
  } else {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.type} ${item.type}--${e.label}`;
      });
    } else {
      c = `${item.type}`;
    }
  }

  return c;
}

// add data
export function handleMergeElementItems(array, data, key) {
  return array.map((item, i) => {
    return handleMerge(item, data, key);
  });
}

export function handleMergeData(structureElement, data, key) {
  structureElement.label = data.data.day;

  return createElement(structureCopy, key, "new data");
}

export function handleMerge(structureElement, data, key) {
  if (structureElement.parts.length > 0) {
    // nested structure
    if (handleCheckIfNot(structureElement.link, "")) {
      // data needed in this layer
      return handleMergeData(structureElement, data, key);
    } else {
      // NO data needed in this layer
      handleMergeElementItems(structureElement.parts, data, key);
    }
  } else {
    // single dom
    if (handleCheckIfNot(structureElement.link, "")) {
      // data needed in this layer
      handleMergeData(structureElement, data, key);
    } else {
      // NO data needed in this layer
      // renderComponent(structureElement, key);
    }
  }
}

export function handleCheckIfNot(element, condition) {
  return element !== condition;
}
