// data
import React from "react";
import { forms } from "../../constants/conf";
import { forecast_data } from "../../constants/mock";

// functions
import handleCreateFormArray from "../common/forms/forms";
import { createClass } from "./dataStyling";
import { createElement } from "../common/setup/commonUtils";

// components
import Form from "../../components/common/blocks/form/Form";
import Input from "../../components/ui/inputs/Input";
import List from "../../components/common/blocks/list/List";
import Card from "../../components/common/blocks/cards/Card";
import Term from "../../components/common/elements/list/Term";
import TextDiscription from "../../components/common/elements/list/TextDiscription";
import GroupDiscription from "../../components/common/blocks/list/GroupDiscription";
import TextItem from "../../components/common/elements/list/TextItem";
import CustomBoxInput from "../../components/ui/groups/CustomBoxInput";
import Button from "../../components/ui/buttons/Button";

// variables
// eslint-disable-next-line 
let structureCopy = null;

// render data
export function renderElementItems(array) {
  return array.map((item, i) => {
    let todo = null;

    // if (item.type === "list--forecast") {

    // }
    if (item.type === "card") {
      return (
        // DOM is a card
        // render card !!! content = interactive created by creatElement
        renderComponent(item, "")
      );
    }
    if (item.type === "list" || item.type === "discription_group") {
      // DOM is a list of any type or group dd
      // render list !!! type = trough props
      todo = renderComponent(item, i, null);
    } else if (item.parts.length > 0) {
      // Nested DOM
      todo = (
        <item.element key={i} className={createClass(item)}>
          {renderElementItems(item.parts)}
        </item.element>
      );
    } else {
      // Single DOM
      if (
        item.type === "discription" ||
        item.type === "term" ||
        item.type === "textItem" ||
        item.type === "button" ||
        item.type === "customBoxInput"
      ) {
        return renderComponent(item, i, null);
      } else {
        todo = renderElement(item, i, null);
      }
    }

    return todo;
  });
}

export function renderElement(item, key) {
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

    return renderComponent(item, "form" + key, array);
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
        key={"input" + key}
      />
    );
  } else if (item.parts[0] !== undefined) {
    if (item.part[0].type === "card") {
      return (
        // DOM is a card
        // render card !!! content = interactive created by creatElement
        renderComponent(item, "")
      );
    }
  } else {
    return (
      <item.element key={"element" + key} className={createClass(item)}>
        {item.label}
      </item.element>
    );
  }
}

export function renderComponent(item, key, array, load) {
  switch (item.type) {
    case "list":
      return (
        <List
          key={"list" + key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "card":
      return (
        <Card
          key={key}
          class={createClass(item)}
          content={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "form":
      return <Form key={key} array={array} class={createClass(item)} />;
    case "term":
      return <Term key={key} item={item} class={createClass(item)} />;
    case "discription":
      return (
        <TextDiscription key={key} item={item} class={createClass(item)} />
      );
    case "discription_group":
      return (
        <GroupDiscription
          key={key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "customBoxInput":
      return (
        <CustomBoxInput
          key={key}
          class={createClass(item)}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
          content={item.parts}
        />
      );
    case "item":
      return <TextItem key={key} item={item} class={createClass(item)} />;
    case "button":
      return (
        <Button
          key={key}
          item={item}
          label={item.label}
          class={createClass(item)}
        />
      );

    default:
      console.log(`ERROR: no types are matching ${item.type}.`);
  }

  load = false;
}