import React from "react";

// handleChange(e) {
//   const value = (props.type == 'checkbox' || props.type == 'radio'? e.target.checked : e.target.value)
//   if(props.base != 'personlist') {
//     props.onChange(props.id, props.reference, value, props.required)
//   } else {
//     if(value == true) {
//       props.onChange(props.id);
//     } else {
//       props.onChange('');
//     }
//   }
// }

export default function Input(props) {
  return (
    <input
      className={props.class}
      type={props.type}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder || ""}
      onChange={props.onChange}
      required={props.required === "true" ? true : false}
      checked={props.checked}
    />
  );
}
