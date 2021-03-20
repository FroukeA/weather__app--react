// data

// functions
import { handleReceiveFavoriteData } from "../../data/dataProcessing";
import { handleSubmitCity } from "../../weather/weatherUtils";

// components

// variables
let handleData = null;
let tempState = null;

let favorites = {
};
let favorite = {
  name: "",
  data: {
    weatherData: {},
    hourData: {},
    forecastData: {}
  }
};

export function handleCheckFavorite(value) {
  Object.keys(favorites).forEach((element) => {
    if (element !== value || value === "all") {
      handleUnCheckFavoriteItem(element)
    } else if (element === value) {
      handleCheckFavoriteItem(element)
    }
  });

  handleReceiveFavoriteData(favorites, handleData, 'collectFavorites');
}

export function handleUnCheckFavoriteItem(value) {
  return favorites[value].checked = false;
}

export function handleCheckFavoriteItem(value) {
  return favorites[value].checked = true;
}

export function handleClickFavoriteItem(e) {
  handleCheckFavorite(e.target.className);

  handleSubmitCity(e, e.target.className, false);
}

export function handleClickFavorite(e) {
  const target = e.currentTarget;
  if (target.checked) {
    handleAddFavorite();
  } else {
    handleDeleteFavorite()
  }
}

export function handleDeleteFavorite() {
  const name = tempState.weatherData[0].name;

  // get item
  favorites = JSON.parse(localStorage.getItem("favorites"));

  // remove city
  delete favorites[name.toLowerCase()];

  // save to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  handleReceiveFavoriteData(favorites, handleData, 'collectFavorites');
};

export function handleAddFavorite() {
  const name = tempState.weatherData[0].name;
  const tempFavorite = { ...favorite }

  tempFavorite.name = name;
  tempFavorite.data.weatherData = (tempState.weatherData ? tempState.weatherData : null);
  tempFavorite.data.hourData = (tempState.hourData ? tempState.hourData : null);
  tempFavorite.data.forecastData = (tempState.forecastData ? tempState.forecastData : null);
  tempFavorite.checked = true;

  // get localStorage favorites
  favorites = handleGetFavorites();

  // add item
  favorites[name.toLowerCase()] = tempFavorite;

  // save to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));

  handleReceiveFavoriteData(favorites, handleData, 'collectFavorites');
}

export function handleReceiveState(state) {
  tempState = state;
}

export function handleGetFavorites() {
  return JSON.parse(localStorage.getItem("favorites"));
}

export function getFavorites(handleFavo) {
  handleData = handleFavo;

  // localStorage.removeItem('favorites');
  // localStorage.clear();

  if (
    handleGetFavorites() === undefined ||
    handleGetFavorites() === null
  ) {
    localStorage.setItem("favorites", JSON.stringify(favorites));

    // handleAddFavoriteTest();

    handleReceiveFavoriteData(favorites, handleData, 'collectFavorites');
  } else {
    favorites = handleGetFavorites();
    // handleAddFavoriteTest();

    handleReceiveFavoriteData(favorites, handleData, 'collectFavorites');
  }
}


export function handleAddFavoriteTest() {
  const name = 'Spain';
  const tempFavorite = { ...favorite }

  tempFavorite.name = name;
  tempFavorite.data.weatherData = (tempState ? tempState.weatherData : null);
  tempFavorite.data.hourData = (tempState ? tempState.hourData : null);
  tempFavorite.data.forecastData = (tempState ? tempState.forecastData : null);

  // get localStorage favorites
  favorites = handleGetFavorites();

  // add item
  favorites['testName'] = tempFavorite;

  // save to localStorage
  localStorage.setItem("favorites", JSON.stringify(favorites));
}