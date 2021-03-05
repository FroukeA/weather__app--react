// data
import React, { useState } from "react";

import {
  header__content,
  footer__content,
  loader__content,
  weather__content,
  hourly__content
} from "../../constants/conf";

// functions
import { createElement } from "../../utils/common/setup/commonUtils";
import { createClass } from "../../utils/data/dataStyling";
import { getData } from "../../utils/weather/weatherUtils";

// style
import "../../assets/stylesheets/base/app.scss";

// components
// --- weather ---
import Weather from "../../components/weather/Weather";

// --- hourly ---
import Hourly from "../../components/weather/Hourly";

// --- forecast ---
import Forecast from "../../components/forecast/Forecast";

// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import Loading from "../main/loading/Loading";
// import Loaded from "../main/loaded/Loaded";

export default function App() {
  const [weatherData, setWeatherData] = useState({ loading: true, weatherContent: {}, forecastContent: {} });

  function handleData(element, data) {
    setWeatherData({
      ready: false,
      [element]: data
    })
  }
  console.log(3333, weatherData)
  return (
    <div className="App">
      <div className="container">
        {/* common */}
        <Header
          content={header__content}
          createElement={createElement}
          createClass={createClass}
        />

        {(weatherData.loading ?
          <React.Fragment >
            {/* content isn't loaded = search for data and show loading */}
            {getData(handleData)}

            <Loading
              content={loader__content}
              createElement={createElement}
              createClass={createClass}
            />
          </React.Fragment>
          : <React.Fragment>
            {/* content when loaded = received weather and or forecast data */}
            {/* <Loaded
              content={weatherData}
              createElement={createElement}
              createClass={createClass}
            /> */}
            <Weather
              content={weather__content}
              createElement={createElement}
              createClass={createClass}
            />

            <Hourly
              content={hourly__content}
              createElement={createElement}
              createClass={createClass}
            />

            {(weatherData.forecastContent ?
              <Forecast
                content={weatherData.forecastContent}
                createElement={createElement}
                createClass={createClass}
              />
              : null)}
          </React.Fragment>
        )
        }

        {/* common */}
        < Footer
          content={footer__content}
          createElement={createElement}
          createClass={createClass}
        />
      </div >
    </div >
  );
}
