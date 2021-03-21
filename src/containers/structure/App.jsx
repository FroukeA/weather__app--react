// data
import React,
{
  useState,
  // createRef,
  useRef
} from "react";

import {
  header__content,
  footer__content,
  loader__content,
  // favorites__content
  // weather__content,
  // hourly__content
} from "../../constants/conf";

// functions
import { createElement } from "../../utils/common/setup/setupUtils";
import { createClass } from "../../utils/data/dataStyling";
import { getData } from "../../utils/weather/weatherUtils";
import {
  getFavorites,
  handleReceiveState
} from "../../utils/common/favorite/favoriteUtils";

// style
import "../../assets/stylesheets/base/app.scss";

// components
// // --- weather ---
// import Weather from "../../components/weather/Weather";

// // --- hourly ---
// import Hourly from "../../components/weather/Hourly";

// // --- forecast ---
// import Forecast from "../../components/forecast/Forecast";

// --- favorites ---
import Favorites from "../../components/favorites/Favorites";

// --- common ---
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import Loading from "../main/loading/Loading";
import Loaded from "../main/loaded/Loaded";

export default function App() {
  const [weatherData, setWeatherData] = useState({
    loading: true,
    weatherContent: {},
    hourContent: {},
    forecastContent: {},
    weatherData: {},
    hourData: {},
    forecastData: {}
  });

  const [favoriteData, setFavoriteData] = useState({
    loading: true,
    favoritesContent: {},
    favoritesData: {}
  });

  const revealRefs = useRef({});
  revealRefs.current = {};

  function handleData(element, data) {
    setWeatherData(prevState => {
      return {
        ...prevState,
        loading: false,
        [element]: data
      }
    });
  }

  function handleFavorite(element, data) {
    setFavoriteData(prevState => {
      return {
        ...prevState,
        loading: false,
        [element]: data
      }
    });
  }

  function handleCreateRef(el) {
    if (el && !revealRefs.current[el.id]) {
      revealRefs.current[el.id] = el;
    }
  }

  return (
    <div className="App">
      <div className="container">
        {/* common */}
        <Header
          content={header__content}
          createElement={createElement.bind(this, handleCreateRef)}
          createClass={createClass}
        />

        {(favoriteData.loading ?
          getFavorites(handleFavorite)
          : <React.Fragment>
            <Favorites
              content={favoriteData.favoritesContent}
              createElement={createElement.bind(this, handleCreateRef)}
              createClass={createClass}
            />
          </React.Fragment>
        )}

        {(weatherData.loading ?
          <React.Fragment >
            {/* content isn't loaded = search for data and show loading */}
            {getData(handleData)}

            <Loading
              content={loader__content}
              createElement={createElement.bind(this, handleCreateRef)}
              createClass={createClass}
            />
          </React.Fragment>
          : <React.Fragment>
            {/* content when loaded = received weather and or forecast data */}

            {handleReceiveState(weatherData, revealRefs)}

            <Loaded
              content={weatherData}
              createElement={createElement.bind(this, handleCreateRef)}
              createClass={createClass}
            />

            {/* {(Object.keys(weatherData.weatherContent).length !== 0 ?
              <Weather
                content={weather__content}
                createElement={createElement.bind(this, handleCreateRef)}
                createClass={createClass}
              />
              : null)}

            {(Object.keys(weatherData.hourContent).length !== 0 ?
              <Hourly
                content={hourly__content}
                createElement={createElement.bind(this, handleCreateRef)}
                createClass={createClass}
              />
              : null)}

            {(Object.keys(weatherData.forecastContent).length !== 0 ?
              <Forecast
                content={weatherData.forecastContent}
                createElement={createElement.bind(this, handleCreateRef)}
                createClass={createClass}
              />
              : null)} */}
          </React.Fragment>
        )
        }

        {/* common */}
        < Footer
          content={footer__content}
          createElement={createElement.bind(this, handleCreateRef)}
          createClass={createClass}
        />
      </div >
    </div >
  );
}