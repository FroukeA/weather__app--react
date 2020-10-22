// data
import { forecast_data } from "../../constants/mock";

// functions
// components
// variables
let tempElementPart = null; // foreCast = list
let elementPart__parent = null; // foreCast = card
let elementPart__child = null; // foreCast = structureChild
let elementData__parent = null; // foreCast = header or article
// let elementData__child = null; // foreCast = h4 or p

let elementPart__parentId = null; // foreCast = card id

let parents = {};

function dataMerge(elementData__child, id) {

  const tempData = { ...parents[elementData__child.parentId] };
  tempData.parts[id] = elementData__child;

  mergeDataStructure(tempData);
}

function mergeDataStructure(tempData) {
  tempElementPart.parts[elementPart__parentId] = elementPart__parent;
}

export function mergeDataElementItems(structureEl, key, handleData) {
  elementPart__parent = null;

  structureEl.parts.forEach((elementPart, elementPartId) => {
    if (elementPart.data.length === 0) {
      mergeDataElementItems(elementPart, key, handleData)
    } else {
      // data comes from external source, data does NOT come from constants
      if (elementPart.parts[0] !== undefined) {
        const data = forecast_data;

        if (elementPart.parts.length > 0) {
          // Nested DOM
          tempElementPart = elementPart; // foreCast = list

          data.map((dataItem, dataId) => {
            elementPart__parentId = dataId;
            elementPart__parent = JSON.parse(JSON.stringify(elementPart.parts[0])); // foreCast = card === deep copy
            // elementPart__parent = { ...elementPart.parts[0] }; // foreCast = card === copy
            elementPart__child = { ...elementPart__parent.parts[0] }; // foreCast = structureChild

            return elementPart__parent.type === "card"
              ? handlePrepareData(elementPart__child, dataItem)
              : null;
          })
        } else {
          elementPart__parent = { ...elementPart };

          return (elementPart__parent.type === "card"
            ? (handleMerge(elementPart__parent, data, elementPartId))
            : null)
        }
      }
    }
  });
}

export function mergeDataElement(temp, item, key) {
  let elementPart__parent = null;

  let todo = null;

  if (item.data.length !== 0) {
    // data comes from external source, data does NOT come from constants
    if (item.parts[0] !== undefined) {
      const data = forecast_data;

      if (item.parts.length > 0) {
        // Nested DOM
        elementPart__parent = item.parts[0];

        todo = (data.map((dataItem, i) => {
          return item.parts[0].type === "card"
            ? // before render merge data into structure
            (todo = handleMerge(elementPart__parent, dataItem, null))
            : null;
        })
        );
      } else {
        todo = item.parts[0].type === "card"
          ? // before render merge data into structure
          (todo = handleMerge(elementPart__parent, data, null))
          : null;
      }
    }
  }

  return todo;
}

export function handlePrepareData(elementPart__child, dataItem) {
  handleMerge(elementPart__child.parts, dataItem, null);
}

export function handleMergeElementItems(array, data) {
  return array.map((item, itemId) => {
    return handleMerge(item, data, itemId);
  });
}

export function handleMergeData(structureElement, data, id) {
  function get(object, key) {
    var keys = key.split('.');
    for (var i = 0; i < keys.length; i++) {
      if (!object.hasOwnProperty(keys[i])) {
        return null;
      }
      object = object[keys[i]];
    }

    return object;
  }

  let elementData__child = { ...structureElement }


  elementData__child.label = get(data, structureElement.link);

  dataMerge(elementData__child, id);
}



export function handleMerge(structureElement, data, itemId) {
  if (structureElement.dataParent) {
    elementData__parent = structureElement;

    parents[elementData__parent.id] = elementData__parent;
  }

  if (structureElement.parts) {
    if (structureElement.parts.length > 0) {
      // NO data needed in this layer
      handleMergeElementItems(structureElement.parts, data);
    } else {
      // single dom
      if (handleCheckIfNot(structureElement.link, "")) {
        // data needed in this layer
        handleMergeData(structureElement, data, itemId);
      } else {
        // NO data needed in this layer
      }
    }
  } else {
    if (structureElement.length > 0) {
      // NO data needed in this layer
      handleMergeElementItems(structureElement, data);
    } else {
      // single dom
      if (handleCheckIfNot(structureElement.link, "")) {
        // elementData__parent = structureElement;

        // data needed in this layer
        handleMergeData(structureElement, data, itemId);
      } else {
        // NO data needed in this layer
        // renderComponent(structureElement, key);
      }
    }
  }

  return structureElement
}

export function handleCheckIfNot(element, condition) {
  return element !== condition;
}