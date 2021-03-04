// data
import React, { useState } from "react";

import {
  header__content,
  footer__content,
  weather__content,
  hourly__content,
  searchEngine__content
  // forecast__content
} from "../../constants/conf";

// functions
// import { createDataElement } from "../../utils/common/setup/commonUtils";
import { createElement } from "../../utils/common/setup/commonUtils";
import { createClass } from "../../utils/data/dataStyling";
import { getData } from "../../utils/weather/weatherUtils";

// style
import "../../assets/stylesheets/base/app.scss";

// components
// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import Loading from "../main/loading/Loading";

// --- weather ---
import Weather from "../../components/weather/Weather";

// --- hourly ---
import Hourly from "../../components/weather/Hourly";

// --- forecast ---
import Forecast from "../../components/forecast/Forecast";

export default function App() {
  const [weatherData, setWeatherData] = useState({ loading: true, weatherContent: {}, forecastContent: {} });

  function handleData(element, data) {
    setWeatherData({
      ready: false,
      [element]: data
    })
  }

  // createDataElement(forecast__content, handleData.bind(this))

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
            <p>loading...</p>
            <Loading
              content={searchEngine__content}
              createElement={createElement}
              createClass={createClass}
            />
          </React.Fragment>
          : <React.Fragment>
            {/* content when loaded = received weather and or forecast data */}
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

            {/* <Forecast
              content={forecast__content}
              createElement={createElement}
              createClass={createClass}
            // handle={createDataElement.bind(this, forecastdata, null, handleData.bind(this))}
            /> */}
            {(weatherData.forecastContent ?
              <Forecast
                content={weatherData.forecastContent}
                createElement={createElement}
                createClass={createClass}
              // handle={createDataElement.bind(this, forecastdata, null, handleData.bind(this))}
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
