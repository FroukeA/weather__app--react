// data

// functions
import { handleReceiveFavoriteData } from "../../data/dataProcessing";
import { handleSubmitCity } from "../../weather/weatherUtils";

// components

// variables
let handleData = null;
let tempState = null;
let tempRefs = null;
let itemChecked = false;

const heartInputId = 'wcbi_1favorite';

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

// state

// --- Favorite ---
export function handleCheckFavorite(value) {
  Object.keys(favorites).forEach((element) => {
    if (element !== value || value === "all") {
      handleUnCheckFavoriteItem(element);

      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else if (element === value) {
      itemChecked = true;

      handleCheckFavoriteItem(element);

      handleCheckRefItem(value)

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  });

  handleReceiveFavoriteData(favorites, handleData, 'collectFavorites');
}

export function handleUnCheckFavoriteItem(value) {
  favorites = handleGetFavorites();

  return favorites[value].checked = false;
}

export function handleCheckFavoriteItem(value) {
  return favorites[value].checked = true;
}

// --- Reference elements ---
export function handleUnCheckRefItem(value) {
  if (tempRefs) {
    if (Object.keys(tempRefs.current).length > 0) {
      tempRefs.current[heartInputId].checked = false;
    }
  }
}

export function handleCheckRefItem(value) {
  if (tempRefs) {
    setTimeout(() => {
      if (Object.keys(tempRefs.current).length > 0) {
        tempRefs.current[heartInputId].checked = true;
      }
    }, 1000);
  }
}

// interaction
export function handleClickFavoriteItem(e) {
  handleCheckFavorite(e.target.className.toLowerCase());

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

// manipulation
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

// data collecting
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

// setup
export function handleReceiveState(state, refs) {
  tempState = state;
  tempRefs = refs;

  if (itemChecked) {
    handleCheckRefItem()
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