// data

// functions
import { handleReceiveFavoriteData } from "../../data/dataProcessing";

// components

// variables
let handleData = null;
let favorites = {};
let favorite = {
  name: "",
  data: {
    weatherData: {},
    hourData: {},
    forecastData: {}
  }
};
let tempState = null;

export function handleClickFavorite(e) {
  const target = e.currentTarget;
  if (target.checked) {
    console.log('add')
    handleAddFavorite();
  } else {
    console.log('remove')
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