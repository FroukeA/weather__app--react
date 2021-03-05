// data
import React from "react";

// functions

// style

// components
// import SearchEngine from "../../../components/common/blocks/search/SearchEngine";

export default function Loading(props) {
  return (
    <main className='loader'>
      <section className={props.createClass(props.content)}>
        {props.content.parts.map((item, i) => {
          return props.createElement(item, i);
        })}

        {/* <SearchEngine
        content={props.content}
        createElement={props.createElement}
        createClass={props.createClass}
      /> */}
      </section>
    </main>
  );
}