// data
import axios from "axios";

// functions
import { handleReceiveData } from "../data/dataProcessing";
let handleData = null;

// components
// variables
let currentCity = {
  name: "",
  data: {},
};

// let apiKey = "cce07da6a69974d4cbb12e9fb81759f5";
// let apiKey = "3225187ffeee1aca42bdcb35054909ac";
let apiKey = "9f4b04499dcdf5ed9e092a332dd558d1";

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

            handleCurrentForcast();
          })
          .catch((error) => {
            console.log('error', error.response);
          });
      })
      .catch((error) => {
        console.log('error', error.response);
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

function handleGetCurrentLocation() {
  navigator.geolocation.getCurrentPosition(handlePosition);
}


function handleCurrentForcast() {
  currentCity.name = currentCityName;
  currentCity.data.daily[0].name = currentCityName;

  handleReceiveData(currentCity, handleData);
}

export function getData(handle) {
  handleData = handle;
  handleGetCurrentLocation();
}