// data
import React, { useState } from "react";

import {
  header__content,
  footer__content,
  weather__content,
  forecast__content
} from "../../constants/conf";

// functions
import { createDataElement } from "../../utils/common/setup/commonUtils";
import { createElement } from "../../utils/common/setup/commonUtils";
import { createClass } from "../../utils/data/dataStyling"

// style
import "../../assets/stylesheets/base/app.scss";

// components
// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

// --- weather ---
import Weather from "../../components/weather/Weather";

// --- forecast ---
import Forecast from "../../components/forecast/Forecast";

const forecastdata = { ...forecast__content }

export default function App() {
  let [forecast, setForecast] = useState(null);

  function handleData(data) {

    // setForecast(data);
  }

  createDataElement(forecast__content, null, handleData.bind(this))

  return (
    <div className="App">
      <div className="container">
        {/* common */}
        <Header
          content={header__content}
          createElement={createElement}
          createClass={createClass}
        />
        {/* content while loading = no weather or forecast data */}

        {/* content when loaded = received weather and or forecast data */}
        <Weather
          content={weather__content}
          createElement={createElement}
          createClass={createClass}
        />

        <Forecast
          content={forecast__content}
          createElement={createElement}
          createClass={createClass}
        // handle={createDataElement.bind(this, forecastdata, null, handleData.bind(this))}
        />

        {/* common */}
        <Footer
          content={footer__content}
          createElement={createElement}
          createClass={createClass}
        />
      </div>
    </div>
  );
}
