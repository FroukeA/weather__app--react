// data 
import React from "react";

// functions

// style

// components
import Button from "../../../ui/buttons/Button";
import Input from "../../../ui/inputs/Input";
import Label from "../../../ui/labels/Label";

function renderFormFields(props) {
  return props.array.map((item, i) => {
    return item.visible === "true" ? (
      <React.Fragment key={i}>
        <fieldset className={""} id={item.id}>
          {item.label !== "" ? (
            <legend className={"form__title--hide"}>{item.label}</legend>
          ) : null}

          {item.type === "form_dataPart" ? (
            <React.Fragment>
              <Label
                class={props.createClass(item)}
                base={""}
                type={""}
                hide={props.hide}
                labelText={item.label}
                htmlFor={item.id}
              />

              <Input
                onChange={item.function}
                class={"form__input--search"}
                base={""}
                type={"radio"}
                id={item.id + "__part-check"}
                name={item.id + "part-check"}
                placeholder={""}
                required="true"
                reference={item.ref}
                checked={item.visible === "true" ? true : false}
              />
            </React.Fragment>
          ) : null}

          <div className="form__partGroup">
            {renderFormItems(props, item.parts)}
            {item.position !== "end" ? (
              <Button
                class={props.createClass(item)}
                reference={item.ref}
                type={props.typeSecondButton}
                name={props.idSecondButton}
                id={props.idSecondButton}
                onClick={null}
                onSubmit={null}
                disabled={props.form_nextButtonDisabled}
                label={props.labelSecondButton}
                key={null}
                item={null}
              />
            ) : null}
          </div>
        </fieldset>
      </React.Fragment>
    ) : null;
  });
}

function renderFormItems(props, array) {
  return array.map((parentItem, pi) => {
    return parentItem.type !== "parent" ? (
      parentItem.type !== "custom" ? (
        <div key={pi} className={""}>
          <Label
            class={""}
            base={""}
            type={""}
            hide={props.hide}
            labelText={parentItem.label}
            htmlFor={parentItem.id}
          />

          <Input
            onChange={parentItem.function}
            class={"form__input--search"}
            base={""}
            type={parentItem.type}
            id={parentItem.id}
            name={parentItem.id}
            placeholder={parentItem.placeholder}
            required={parentItem.required}
            reference={parentItem.ref}
          />
        </div>
      ) : (
          <p key={pi}>here custom input</p>
        )
    ) : (
        parentItem.elements.map((subItem, si) => {
          return subItem.type !== "custom" ? (
            <div key={si} className={props.createClass(subItem)}>
              <Label
                class={""}
                base={""}
                type={""}
                hide={props.hide}
                labelText={subItem.label}
                htmlFor={subItem.id}
              />
              <Input
                onChange={subItem.function}
                class={"form__input--search"}
                base={""}
                type={subItem.type}
                id={subItem.id}
                name={subItem.id}
                placeholder={subItem.placeholder}
                required={subItem.required}
                reference={subItem.ref}
              />
            </div>
          ) : (
              <p key={si}>here custom input (not created yet)</p>
            );
        })
      );
  });
}

export default function Form(props) {
  return (
    <form className={"form " + props.class} id={props.item.id} onSubmit={props.item.function}>
      { renderFormFields(props)}

      <Button
        class={`form__button--submit`}
        reference={null}
        disabled={props.form_submitButtonDisabled}
        type={props.idSubmitButton}
        name={props.idSubmitButton}
        id={`form${props.item.id}__button--submit`}
        onClick={null}
        onSubmit={null}
        label={"submit"}
        key={null}
        item={null}
      />
    </form >
  );
}
