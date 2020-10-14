import React from "react";
import handleCreateFormArray from "./forms/forms";

import { forms } from "../../constants/conf";
import { forecast_data } from "../../constants/mock";

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

let structureCopy = null;

export function buidCardContent(content) {
  console.log("debug card", content);
}

export function renderElementItems(array) {
  return array.map((item, i) => {
    let todo = null;

    if (item.data.length === 0) {
      // NO data comes from external source, data comes from constants

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
    } else {
      // data comes from external source, data does NOT come from constants
      if (item.parts[0] !== undefined) {
        const data = forecast_data;
        if (item.parts.length > 0) {
          // Nested DOM

          structureCopy = item.parts[0];

          todo = (
            <item.element key={i} className={createClass(item)}>
              {data.map((dataItem, i) => {
                // What do we have? data & print of structure. need structure ask custom data and what overide it with data from dataitem
                return item.parts[0].type === "card"
                  ? // before render merge data into structure
                    (todo = renderComponent(item.parts[0], "card" + i))
                  : null;
                //   handleMerge(structureCopy, dataItem, "card")
                // : null;
              })}
            </item.element>
          );
        }
      }
    }

    return todo;
  });
}

export function renderElement(item, key) {
  if (item.data.length === 0) {
    // NO data comes from external source, data comes from constants
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

      // render form
      return renderComponent(item, "form" + key, array);
      // return <Form key={"form" + key} array={array} />;
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
  } else {
    // data comes from external source, data does NOT come from constants
    if (item.parts[0] !== undefined) {
      if (item.part[0].type === "card") {
        return (
          // DOM is a card
          // render card !!! content = interactive created by creatElement
          renderComponent(item, "")
        );
      }
    }
  }
}

export function renderComponent(item, key, array) {
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
}

export function createElement(item, key) {
  if (item.parts.length > 0) {
    // Nested DOM
    if (item.type === "card") {
      return renderComponent(item, "", null, null);
    } else {
      return (
        <item.element key={key} className={createClass(item)}>
          {renderElementItems(item.parts)}
        </item.element>
      );
    }
  } else {
    // Single DOM
    if (
      item.type === "discription" ||
      item.type === "term" ||
      item.type === "textItem" ||
      item.type === "button" ||
      item.type === "customBoxInput"
    ) {
      return renderComponent(item, key, null);
    } else {
      return renderElement(item, key);
    }
  }
}

// add styling and SCSS
export function createClass(item) {
  let c = ``;

  if (item.ref) {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.ref}__${item.type} ${item.ref}__${item.type}--${e.label}`;
      });
    } else {
      c = `${item.ref}__${item.type}`;
    }
  } else {
    if (item.class.length > 0) {
      item.class.forEach((e) => {
        c = `${item.type} ${item.type}--${e.label}`;
      });
    } else {
      c = `${item.type}`;
    }
  }

  return c;
}

// add data
export function handleMergeElementItems(array, data, key) {
  return array.map((item, i) => {
    return handleMerge(item, data, key);
  });
}

export function handleMergeData(structureElement, data, key) {
  structureElement.label = data.data.day;

  return createElement(structureCopy, key, "new data");
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
