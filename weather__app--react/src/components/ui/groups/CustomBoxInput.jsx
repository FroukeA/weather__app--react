import React from "react";

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
      />
      <Label
        // titles
        // functions
        // data
        class={""}
        base={""}
        type={""}
        hide={props.hide}
        labelText={props.item.label}
        htmlFor={props.item.id + props.item.label}
        // array & objects
      />
    </div>
  );
}
