// data
import React from "react";

import {
  weather__content,
  hourly__content,
} from "../../../constants/conf";

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
      <Weather
        content={weather__content}
        createElement={props.createElement}
        createClass={props.createClass}
      />

      <Hourly
        content={hourly__content}
        createElement={props.createElement}
        createClass={props.createClass}
      />

      {(props.content.forecastContent ?
        <Forecast
          content={props.content.forecastContent}
          createElement={props.createElement}
          createClass={props.createClass}
        />
        : null)}
    </main>
  );
}