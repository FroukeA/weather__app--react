// data
import React from "react";

// functions

// style

// components
import SearchEngine from "../../../components/common/blocks/search/SearchEngine";

export default function Loading(props) {
  return (
    <React.Fragment>
      <p>When catching your location takes to long, please fill in the place you're looking for.</p>
      <SearchEngine
        content={props.content}
        createElement={props.createElement}
        createClass={props.createClass}
      />
    </React.Fragment>
  );
}