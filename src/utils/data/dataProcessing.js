// add data
export function handleMergeElementItems(array, data, key) {
  return array.map((item, i) => {
    return handleMerge(item, data, key);
  });
}

export function handleMergeData(structureElement, data, key) {
  structureElement.label = data.data.day;

  // merge data into structure
  // return createElement(structureCopy, key, "new data");
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
