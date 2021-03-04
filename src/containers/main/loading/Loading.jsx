// data
import React from "react";

// functions

// style

// components
import SearchEngine from "../../../components/common/blocks/search/SearchEngine";

export default function Loading(props) {
  return (
    <React.Fragment>
      <p>hello, it supose to be loading...</p>

      <SearchEngine
        content={props.content}
        createElement={props.createElement}
        createClass={props.createClass}
      />
    </React.Fragment>
  );
}