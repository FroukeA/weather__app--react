// data
import React from "react";

// import {
//   weather__content,
//   hourly__content,
// } from "../../../constants/conf";

// functions

// style

// components
// --- weather ---
import Weather from "../../../components/weather/Weather";

// --- hourly ---
import Hourly from "../../../components/weather/Hourly";

// --- forecast ---
import Forecast from "../../../components/forecast/Forecast";

export default function Loaded(props) {
  return (
    <main className='loaded'>
      {(Object.keys(props.content.weatherContent).length !== 0 ?
        <Weather
          content={props.content.weatherContent}
          createElement={props.createElement}
          createClass={props.createClass}
        />
        : null)}

      {(Object.keys(props.content.hourContent).length !== 0 ?
        <Hourly
          content={props.content.hourContent}
          createElement={props.createElement}
          createClass={props.createClass}
        />
        : null)}

      {(Object.keys(props.content.forecastContent).length !== 0 ?
        <Forecast
          content={props.content.forecastContent}
          createElement={props.createElement}
          createClass={props.createClass}
        />
        : null)}
    </main>
  );
}