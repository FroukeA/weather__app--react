// data
import React from "react";

import {
  header__content,
  footer__content,
  // weather__content,
  // forecast__content
} from "../../constants/conf";

// functions
import { createElement, createClass } from "../../utils/common/commonUtils";

// style
import "../../assets/stylesheets/base/app.scss";

// components
// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";

// --- weather ---
// import Weather from "../../components/weather/Weather";

// --- forecast ---
// import Forecast from "../../components/forecast/Forecast";

export default function App() {
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
        {/* <Weather
          content={weather__content}
          createElement={createElement}
          createClass={createClass}
        />

        <Forecast
          content={forecast__content}
          createElement={createElement}
          createClass={createClass}
        /> */}

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
