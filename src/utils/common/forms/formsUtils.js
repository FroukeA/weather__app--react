// data

// functions

// components

// variables

export default function handleCreateFormArray(
  list,
  handleSetState,
  ref,
  formRef,
  formLayerRef,
  formArrayRef
) {
  const item = list.filter((form) => form["ref"] === ref)[0];
  const formArray = item["parts"];

  return formArray;
}
