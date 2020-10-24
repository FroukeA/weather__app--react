import React from "react";

import Term from "../../elements/list/Term";
import Textdescription from "../../elements/list/TextDescription";
import TextItem from "../../elements/list/TextItem";

function renderDL(props) {
  return (
    <dl className={props.createClass(props.item)}>
      {props.item.parts.map((item, i) => {
        return item.parts.length > 0 ? (
          <React.Fragment key={"list" + i}>
            {props.createElement(item)}
          </React.Fragment>
        ) : item.element === "dt" ? (
          <Term key={"list" + i} item={item.label} />
        ) : (
              <Textdescription key={"list" + i} item={item.label} />
            );
      })}
    </dl>
  );
}

function renderUL(props) {
  return (
    <ul className={props.createClass(props.item)}>
      {props.item.parts.map((item, i) => {
        return item.parts.length > 0 ? (
          <React.Fragment key={"list" + i}>
            {props.createElement(item)}
          </React.Fragment>
        ) : (
            <TextItem key={"list" + i} item={item} />
          );
      })}
    </ul>
  );
}

export default function List(props) {
  return (
    <React.Fragment>
      {props.item.element === "dl" ? renderDL(props) : renderUL(props)}
    </React.Fragment>
  );
}
