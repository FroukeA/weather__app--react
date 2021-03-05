// data
import React from "react";

// functions

// style

// components
import Input from "../inputs/Input";
import Label from "../labels/Label";

export default function CustomBoxInput(props) {
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
        checked={props.item.checked}
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
