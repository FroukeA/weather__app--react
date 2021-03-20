// data
import React from "react";

// functions

// style

// components
import Input from "../inputs/Input";
import Label from "../labels/Label";

export default function CustomBoxInput(props) {
  // console.log('custom input', props.item.label, props.item.checked)
  return (
    <div className={props.createClass(props.item)}>
      <Input
        class={props.item.label}
        base={props.item.ref}
        type={props.item.element}
        id={props.item.id + props.item.label}
        name={props.item.id}
        placeholder={props.item.label}
        required={props.item.required}
        reference={props.item.ref}
        checked={props.item.checked !== null || props.item.checked !== undefined ? props.item.checked : null}
        onChange={props.item.function}
      />
      <Label
        class={""}
        base={""}
        type={""}
        hide={props.hide}
        labelText={props.item.label}
        htmlFor={props.item.id + props.item.label}
      />
    </div>
  );
}
