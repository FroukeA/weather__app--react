// data
import axios from "axios";

// functions
import { handleReceiveData } from "../data/dataProcessing";
import { handleCheckFavorite } from "../common/favorite/favoriteUtils";

// components

// variables
// let favorites = {};
let handleData = null;

let sentence = "";

let city = "";

let currentCity = {
  name: "",
  data: {},
};

// let apiKey = "cce07da6a69974d4cbb12e9fb81759f5";
let apiKey = "3225187ffeee1aca42bdcb35054909ac";
// let apiKey = "9f4b04499dcdf5ed9e092a332dd558d1";

let apiUrl = null;

let lat = null;

let long = null;

let currentPosition = null;

let currentCityName = null;

// Weather API

const handleGetWeatherCurrentPosition = () => {
  const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minute&appid=${apiKey}&units=metric`;

  if (lat && long) {
    axios
      .get(apiUrl1)
      .then((response) => {
        currentCityName = response.data.name;
        axios
          .get(apiUrl)
          .then((response) => {
            currentCity.data = response.data;

            handleCurrentForcast('weather');
          })
          .catch((error) => {
            console.log('ERROR:', error.response);
          });
      })
      .catch((error) => {
        console.log('ERROR', error.response);
      });
  }
};

// Geolocation API
function handlePosition(response) {
  currentPosition = response;
  lat = currentPosition.coords.latitude;
  long = currentPosition.coords.longitude;

  handleGetWeatherCurrentPosition();
};

export function handleGetCurrentLocation() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}


function handleCurrentForcast(reason) {
  currentCity.name = currentCityName;
  currentCity.data.daily[0].name = currentCityName;

  handleReceiveData(currentCity, handleData, reason);
}

export function getData(handle) {
  handleData = handle;

  handleGetCurrentLocation();
}

// SearchEngine
export function handleChangeText(event) {
  event.preventDefault();

  const value = event.target.value;

  city = value;
}

export function handleSubmitCity(event, name, defaultBehavior) {
  if (defaultBehavior !== false) {
    event.preventDefault()
  }

  const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${(name ? name.toLowerCase() : city.toLowerCase())}&appid=${apiKey}&units=metric`;

  axios
    .get(apiUrl1)
    .then((response) => {
      currentCityName = response.data.name;
      lat = response.data.coord.lat;
      long = response.data.coord.lon;

      handleCheckFavorite(currentCityName.toLowerCase());

      apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minute&appid=${apiKey}&units=metric`;
      axios
        .get(apiUrl)
        .then((response) => {
          currentCity.data = response.data;
          handleCurrentForcast('searchSubmit');
        })
        .catch((error) => {
          console.log('ERROR:', error.response);
        });
    })
    .catch((error) => {
      console.log('ERROR:', error.response);
      sentence = `Sorry, we do not know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`;
      handleGreeting(sentence);
    });
};

const handleGreeting = (greeting) => {
  alert(greeting);
};