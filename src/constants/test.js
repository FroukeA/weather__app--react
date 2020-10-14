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
import CustomBoxInput from "../../components/ui/inputs/CustomBoxInput";

let structureCopy = null;

// show and build the DOM
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
          <item.element key={i}>{renderElementItems(item.parts)}</item.element>
        );
      } else {
        // Single DOM
        if (
          item.type === "discription" ||
          item.type === "term" ||
          item.type === "textItem"
        ) {
          return renderComponent(item, i, null);
        } else {
          todo = renderElement(item, i, null);
        }
      }
    } else {
      // data comes from external source, data does NOT come from constants
      if (item.parts[0] !== undefined) {
        // const data = forecast_data;
        console.log("data", item.label, item.type, item);
        structureCopy = item.parts[0];

        if (item.parts.length > 0) {
          // Nested DOM

          // data.map((dataItem, i) => {
          //   structureCopy = item.parts[0];
          //   //  comes 2 times here 1 for the dt 1 for dd
          //   return item.parts[0].type === "card"
          //     ? handleMerge(structureCopy, dataItem, "card")
          //     : null;
          // });

          myFirstPromise.then((successMessage) => {
            // successMessage is whatever we passed in the resolve(...) function above.
            // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
            console.log("Yay! " + successMessage);
            return <item.element key={333}></item.element>;
          });

          return <item.element key={333}>test</item.element>;

          // todo = (
          //   <item.element key={i}>
          //     {data.map((dataItem, i) => {
          //       structureCopy = item.parts[0];
          //       //  comes 2 times here 1 for the dt 1 for dd
          //       return console.log("data needed");
          //       // return item.parts[0].type === "card"
          //       //   ? handleMerge(structureCopy, dataItem, "card")
          //       //   : null;
          //     })}
          //   </item.element>
          // );
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
    } else if (item.id.includes("wi")) {
      return (
        // DOM is a input of any kind
        // render input !!! type = trough props
        <Input
          class={""}
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
      return <item.element key={"element" + key}>{item.label}</item.element>;
    }
  } else {
    // data comes from external source, data does NOT come from constants
  }
}

export function renderComponent(item, key, array) {
  switch (item.type) {
    case "list":
      return (
        <List
          key={"list" + key}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "card":
      return console.log("card need to be made");
    // <Card
    //   key={key}
    //   content={item}
    //   createElement={createElement.bind(this)}
    //   createClass={createClass.bind(this)}
    // />
    case "form":
      return <Form key={key} array={array} />;
    case "term":
      return <Term key={key} item={item} />;
    case "discription":
      return <TextDiscription key={key} item={item} />;
    case "discription_group":
      return (
        <GroupDiscription
          key={key}
          item={item}
          createElement={createElement.bind(this)}
          createClass={createClass.bind(this)}
        />
      );
    case "item":
      return <TextItem key={key} item={item} />;
    case "custom":
      return <CustomBoxInput key={key} item={item} />;

    default:
      console.log(`ERROR: no types are matching ${item.type}.`);
  }
}

export function createElement(item, key, text) {
  if (item.parts.length > 0) {
    // Nested DOM
    if (item.type.includes("card")) {
      // console.log(111111, "card", item, item.label, key);
      renderComponent(item, "", null);
    } else {
      return (
        <item.element key={key}>
          {console.log(2222, item, item.label, key)}
          {renderElementItems(item.parts)}
        </item.element>
      );
    }
  } else {
    // Single DOM
    if (
      item.type === "discription" ||
      item.type === "term" ||
      item.type === "textItem"
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
    if (item.class) {
      item.class.forEach((e) => {
        c = `${item.ref} ${item.type}--${e.label}`;
      });
    } else {
      c = item.ref;
    }
  } else {
    if (item.class) {
      item.class.forEach((e) => {
        c = `${item.type} ${item.type}--${e.label}`;
      });
    } else {
      c = item.type;
    }
  }
  return c;
}

// add data
let myFirstPromise = new Promise((resolve, reject) => {
  // handleMerge(structureElement, data, key);

  resolve("Success!");
});

export function handleMergeElementItems(array, data, key) {
  return array.map((item, i) => {
    return handleMerge(item, data, key);
  });
}

export function handleMergeData(structureElement, data, key) {
  structureElement.label = data.data.day;
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
