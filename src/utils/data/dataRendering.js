// data
import React from "react";
import { forms } from "../../constants/conf";

// functions
import handleCreateFormArray from "../common/forms/formsUtils";
import { createClass } from "./dataStyling";
import { createElement } from "../common/setup/setupUtils";

// components
import Form from "../../components/common/blocks/form/Form";
import Input from "../../components/ui/inputs/Input";
import List from "../../components/common/blocks/list/List";
import Card from "../../components/common/blocks/cards/Card";
import Term from "../../components/common/elements/list/Term";
import Textdescription from "../../components/common/elements/list/TextDescription";
import Groupdescription from "../../components/common/elements/list/GroupDescription";
import TextItem from "../../components/common/elements/list/TextItem";
import CustomBoxInput from "../../components/ui/groups/CustomBoxInput";
import Button from "../../components/ui/buttons/Button";
import Loader from "../../components/common/elements/loader/Loader";

// variables
let id = 0;
// let handleRef = null;

// render data
export function renderElementItems(array, handleRef) {
  return array.map((item, i) => {
    let todo = null;

    if (item.type === "card") {
      return (
        // DOM is a card
        // render card !!! content = interactive created by creatElement
        renderComponent(item, "", null, null, handleRef)
      );
    }
    if (item.type === "list" || item.type === "description_group") {
      // DOM is a list of any type or group dd
      // render list !!! type = trough props
      todo = renderComponent(item, i, null, null, handleRef);
    } else if (item.parts.length > 0) {
      // Nested DOM
      todo = (
        <item.element
          key={item.id}
          className={createClass(item)}
          ref={(item.needRef ? handleRef : null)}
        >
          {renderElementItems(item.parts, handleRef)}
        </item.element>
      );
    } else {
      // Single DOM
      if (
        item.type === "description" ||
        item.type === "term" ||
        item.type === "textItem" ||
        item.type === "button" ||
        item.type === "customBoxInput"
      ) {
        return renderComponent(item, i, null, null, handleRef);
      } else {
        todo = renderElement(item, i, null);
      }
    }

    return todo;
  });
}

export function renderElement(item, key, handleRef) {
  // handleRef = handleRef;

  if (item.type === "form") {
    // DOM is a form
    // collect the form data
    const array = handleCreateFormArray(
      forms,
      null,
      item.id,
      null,
      null,
      null
    );

    return renderComponent(item, "form" + key, array, null, handleRef);
  } else if (item.type === "loader") {
    renderComponent(item, "")
  } else if (item.id.includes("wi")) {
    return (
      // DOM is a input of any kind
      // render input !!! type = trough props
      <Input
        class={createClass(item)}
        base={item.ref}
        type={item.type}
        id={item.id}
        name={item.id}
        placeholder={item.label}
        required={item.required}
        reference={item.ref}
        key={item.id + key}
        myref={(item.needRef ? handleRef : null)}
      />
    );
  } else if (item.id.includes("fta")) {
    return (
      <item.element
        key={item.id + key}
        href={item.link}
        target="_blank"
        className={createClass(item)}
        ref={(item.needRef ? handleRef : null)}
      >
        {item.label}
      </item.element>
    )
  } else if (item.parts[0] !== undefined) {
    if (item.part[0].type === "card") {
      return (
        // DOM is a card
        // render card !!! content = interactive created by creatElement
        renderComponent(item, "", null, null, handleRef)
      );
    }
  } else {
    return (
      <item.element
        key={item.id + key}
        className={createClass(item)}
        ref={(item.needRef ? handleRef : null)}
      >
        {item.label}
      </item.element>
    );
  }
}

export function renderComponent(item, key, array, load, handleRef) {
  id += 1;
  // handleRef = handleRef

  switch (item.type) {
    case "list":
      return (
        <List
          key={item.id + key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this, handleRef)}
          createClass={createClass.bind(this)}
          myref={(item.needRef ? handleRef : null)}
        />
      );
    case "card":
      return (
        <Card
          key={item.id + item.ref + key + id}
          class={createClass(item)}
          content={item}
          createElement={createElement.bind(this, handleRef)}
          createClass={createClass.bind(this)}
          myref={(item.needRef ? handleRef : null)}
        />
      );
    case "form":
      return (
        <Form
          key={item.id + key}
          array={array}
          class={createClass(item)}
          item={item}
          myref={(item.needRef ? handleRef : null)}
        />
      )
    case "loader":
      return (
        <Loader
          key={item.id + key}
          item={item}
          class={createClass(item)}
          myref={(item.needRef ? handleRef : null)}
        />
      );
    case "term":
      return (
        <Term
          key={item.id + key}
          item={item}
          class={createClass(item)}
          myref={(item.needRef ? handleRef : null)}
        />
      )
    case "description":
      return (
        <Textdescription
          key={item.id + key}
          item={item}
          class={createClass(item)}
          myref={(item.needRef ? handleRef : null)}
        />
      );
    case "description_group":
      return (
        <Groupdescription
          key={item.id + key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this, handleRef)}
          createClass={createClass.bind(this)}
          myref={(item.needRef ? handleRef : null)}
        />
      );
    case "customBoxInput":
      return (
        <CustomBoxInput
          key={item.id + key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this, handleRef)}
          createClass={createClass.bind(this)}
          content={item.parts}
          checked={item.checked}
          myref={(item.needRef ? handleRef : null)}
        />
      );
    case "item":
      return (
        <TextItem
          key={item.id + key}
          item={item}
          class={createClass(item)}
          myref={(item.needRef ? handleRef : null)}
        />
      )
    case "button":
      return (
        <Button
          key={item.id + key}
          class={createClass(item)}
          reference={null}
          type={null}
          name={null}
          id={item.id}
          item={item}
          onClick={item.function}
          onSubmit={null}
          disabled={true}
          label={item.label}
          myref={(item.needRef ? handleRef : null)}
        />
      );

    default:
      console.log(`ERROR: no types are matching ${item.type}.`);
  }

  load = false;
}