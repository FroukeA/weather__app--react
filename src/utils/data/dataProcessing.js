// data
import {
  forecast__content,
  weather__content,
  hourly__content,
  favorites__content
} from "../../constants/conf";

// functions
let handle = null;

// components

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// variables
let data = null;
let weather = null;

let type = null;
let item = null;

let tempElementPart = null; // foreCast = list
let elementPart__parent = null; // foreCast = card
let elementPart__child = null; // foreCast = structureChild
let elementData__parent = null; // foreCast = header or article

let elementPart__parentId = null; // foreCast = card id

let parents = {};

// common
export function handleCheckIfNot(element, condition) {
  return element !== condition;
}

// start

function createDataElement(d, i, t) {
  type = t;
  item = i;

  if (type === 'forecastContent') {
    data = d.slice(1, d.length);
  } else if (type === 'weatherContent') {
    data = d[0];
  } else if (type === 'hourContent') {
    data = d;
  } else if (type === 'favoritesContent') {
    data = d;
  }

  handleMergeDataElements(item);
}

export function handleReceiveFavoriteData(d, handleData, reason) {
  handle = handleData;

  if (Object.values(d).length > 0) {
    createDataElement(Object.values(d), favorites__content, "favoritesContent");
    handle("favoritesData", d);
  } else {
    handle("favoritesContent", {});
  }
}

export function handleReceiveData(d, handleData, reason) {
  handle = handleData;
  weather = d;

  if (reason === 'searchSubmit') {
    weather__content.parts[1].parts[1].parts[0].parts[1].parts[0].parts[0].checked = true;
    weather__content.parts[1].parts[1].parts[0].parts[1].parts[1].parts[0].checked = false;
  }

  // weather
  createDataElement(d.data.daily, weather__content, "weatherContent");
  handle("weatherData", d.data.daily);

  // hourly
  createDataElement(d.data.hourly, hourly__content, "hourContent");
  handle("hourData", d.data.daily);

  // forecast
  createDataElement(d.data.daily, forecast__content, "forecastContent");
  handle("forecastData", d.data.daily);
}

// date
function convertData(object, key, data) {
  switch (key) {
    case 'dt':
      return handleCreateDay(handleCreateDate(data.dt).getDay());
    case 'time':
      const time = handleCreateDate(data.dt);
      return `${time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
        }: ${time.getMinutes() < 10
          ? "0" + time.getMinutes()
          : time.getMinutes()
        }`;
    case 'sunrise':
      const sunrise = handleCreateDate(data.sunrise);
      return `${sunrise.getHours() < 10 ? "0" + sunrise.getHours() : sunrise.getHours()
        }: ${sunrise.getMinutes() < 10
          ? "0" + sunrise.getMinutes()
          : sunrise.getMinutes()
        }`;
    case 'sunset':
      const sunset = handleCreateDate(data.sunset);

      return `${sunset.getHours() < 10 ? "0" + sunset.getHours() : sunset.getHours()
        }: ${sunset.getMinutes() < 10
          ? "0" + sunset.getMinutes()
          : sunset.getMinutes()
        }`;
    case 'temp':
      return object[key].day.toFixed(1)
    case 'temp--hourly':
      return object['temp'].toFixed(1)
    case 'low':
      return data.temp.min.toFixed(1)
    case 'high':
      return data.temp.max.toFixed(1)
    case 'description':
      return data.weather[0].description;
    case 'wind_speed':
      return `${data.wind_speed}m/sec`;
    case 'rain':
      return (data.rain ? `${data.rain}mm/h` : `...mm/h`);
    case 'humidity':
      return `${data.humidity}%`;
    case 'icon':
      return data.weather[0].icon;
    case 'name--favo':
      return data.name;
    default:
      return object[key]
  }
}

const handleCreateDate = (stamp) => {
  return new Date(stamp * 1000);
};

const handleCreateDay = (day) => {
  return days[day]
}

// weather and forecast conversion scale
const handleCelsiusToFahrenheit = (value) => {
  const temp = (value * 9) / 5 + 32;
  return temp;
};

const handleFahrenheitToCelsius = (value) => {
  const temp = ((value - 32) * 5) / 9;
  return temp;
};

export function handleChangeConversion(conversion, event) {
  switch (conversion) {
    case 'celsius':
      weather__content.parts[1].parts[1].parts[0].parts[1].parts[0].parts[0].checked = true;
      weather__content.parts[1].parts[1].parts[0].parts[1].parts[1].parts[0].checked = false;
      weather.data.daily.forEach(element => {
        element.temp.day = handleFahrenheitToCelsius(element.temp.day);
        element.temp.max = handleFahrenheitToCelsius(element.temp.max);
        element.temp.min = handleFahrenheitToCelsius(element.temp.min);
      });

      // weather
      createDataElement(weather.data.daily, weather__content, "weatherContent");

      // hourly
      createDataElement(weather.data.hourly, hourly__content, "hourContent");

      // forecast
      createDataElement(weather.data.daily, forecast__content, "forecastContent");
      break;
    case 'fahrenheit':
      weather__content.parts[1].parts[1].parts[0].parts[1].parts[1].parts[0].checked = true;
      weather__content.parts[1].parts[1].parts[0].parts[1].parts[0].parts[0].checked = false;
      weather.data.daily.forEach(element => {
        element.temp.day = handleCelsiusToFahrenheit(element.temp.day);
        element.temp.max = handleCelsiusToFahrenheit(element.temp.max);
        element.temp.min = handleCelsiusToFahrenheit(element.temp.min);
      });

      // weather
      createDataElement(weather.data.daily, weather__content, "weatherContent");

      // hourly
      createDataElement(weather.data.hourly, hourly__content, "hourContent");

      // forecast
      createDataElement(weather.data.daily, forecast__content, "forecastContent");
      break;
    default:
      return console.log('ERROR: I do not know the conversion:', conversion)
  }
}

// merge

function dataMerge(elementData__child, id) {
  const tempData = { ...parents[elementData__child.parentId] };
  tempData.parts[id] = elementData__child;

  mergeDataStructure();
}

function mergeDataStructure() {
  if (elementPart__parent.ref === 'forecast' || elementPart__parent.ref === 'hourly') {
    tempElementPart.parts[elementPart__parentId] = elementPart__parent; // forecast and hourly
  }
  if (elementPart__parent.ref === 'weather' || elementPart__parent.ref === 'favorites') {
    tempElementPart = elementPart__parent; // weather and favorites
  }

  handle(type, item)
}

function handleMergeDataElements(item, key) {
  // weather or forecast

  if (item.parts.length > 0) {
    // weather or forecast
    // Nested DOM
    mergeDataElementItems(item, key)
  } else {
    // Single DOM
    mergeDataElement(item, 0);
  }
}

export function mergeDataElementItems(structureEl) {
  // console.log('try to proccess favorites')
  elementPart__parent = null;

  structureEl.parts.map((elementPart, elementPartId) => {
    // weather section or forecast section
    if (elementPart.data.length === 0) {
      mergeDataElementItems(elementPart);
    } else {
      // data comes from external source, data does NOT come from constants
      if (elementPart.parts[0] !== undefined) {
        // const data = forecast_data;
        if (elementPart.parts.length > 0) {
          // Nested DOM
          tempElementPart = elementPart; // foreCast = list

          if (data.length > 0) {
            data.map((dataItem, dataId) => {
              if (elementPart.type === "list--favorite") {
                elementPart__parentId = dataId;

                elementPart__parent = { ...elementPart }; // favorite === deep copy // works
                // elementPart__parent = JSON.parse(JSON.stringify(elementPart)); // favorite === deep copy // doesn't work
                elementPart__child = { ...elementPart__parent.parts[0] };

                return elementPart__parent.type === "list--favorite"
                  ? handlePrepareData(elementPart__child, dataItem, dataId)
                  : null;
              } else {
                elementPart__parentId = dataId;
                elementPart__parent = JSON.parse(JSON.stringify(elementPart.parts[0])); // foreCast = card === deep copy

                elementPart__child = { ...elementPart__parent.parts[0] }; // foreCast = structureChild

                return elementPart__parent.type === "card"
                  ? handlePrepareData(elementPart__child, dataItem, null)
                  : null;
              }
            })
          } else {
            elementPart__parentId = 0;
            elementPart__parent = { ...elementPart }; // weather = weather article === copy

            if (elementPart__parent.parts.length > 0) {
              elementPart__parent.parts.map((partItem, partId) => {
                elementPart__parentId = partId;
                elementPart__child = { ...partItem }

                return elementPart__parent.type === "part" || elementPart__parent.type === "list--favorite"
                  ? handlePrepareData(elementPart__child, data, null)
                  : null;
              })
            } else {
              elementPart__child = { ...elementPart__parent.parts[0] }; // weather = structureChild

              return elementPart__parent.type === "part"
                ? handlePrepareData(elementPart__child, data, null)
                : null;
            }
          }
        }
      }
    }
    return null;
  });
}

export function mergeDataElement(elementPart, elementPartId) {
  let elementPart__parent = null;

  if (elementPart.data.length === 0) {
    mergeDataElementItems(elementPart);
  } else {
    // data comes from external source, data does NOT come from constants
    if (elementPart.parts[0] !== undefined) {
      if (elementPart.parts.length > 0) {
        // Nested DOM
        tempElementPart = elementPart; // foreCast = list

        if (data.length > 0) {
          data.map((dataItem, dataId) => {
            elementPart__parentId = dataId;
            elementPart__parent = JSON.parse(JSON.stringify(elementPart.parts[0])); // foreCast = card === deep copy
            elementPart__child = { ...elementPart__parent.parts[0] }; // foreCast = structureChild
            return elementPart__parent.type === "card"
              ? handlePrepareData(elementPart__child, dataItem, null)
              : null;
          })
        } else {
          elementPart__parentId = 0;
          elementPart__parent = { ...elementPart }; // weather = weather article === copy

          if (elementPart__parent.parts.length > 0) {
            elementPart__parent.parts.map((partItem, partId) => {
              elementPart__parentId = partId;
              elementPart__child = { ...partItem }
              return elementPart__parent.type === "part"
                ? handlePrepareData(elementPart__child, data, null)
                : null;
            })
          } else {
            elementPart__child = { ...elementPart__parent.parts[0] }; // weather = structureChild

            return elementPart__parent.type === "part"
              ? handlePrepareData(elementPart__child, data, null)
              : null;
          }
        }
      }
    }
  }
}

export function handlePrepareData(elementPart__child, dataItem, itemId) {
  handleMerge(elementPart__child, dataItem, itemId);
}

export function handleMergeElementItems(array, data, id) {
  return array.map((item, itemId) => {
    return handleMerge(item, data, (item.ref === 'favorites' ? id : itemId));
  });
}

export function handleMergeData(structureElement, data, id) {
  let result = '';

  function get(object, key) {
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      result = convertData(object, keys[i], data);
      object = object[keys[i]];
    }

    return result;
  }

  let elementData__child = { ...structureElement }

  if (structureElement.link === "icon") {
    structureElement.parts.map((item, itemId) => {
      item.label = data.weather[0].description
      if (elementData__child.class[0]) {
        elementData__child.class[0].label = `${get(data, structureElement.link)}`;
      }

      return null
    })

  } else {
    elementData__child.label = get(data, structureElement.link);
  }

  dataMerge(elementData__child, id);
}

export function handleMerge(structureElement, data, itemId) {
  if (structureElement.dataParent) {
    elementData__parent = structureElement;

    parents[elementData__parent.id] = elementData__parent;
  }

  if (structureElement.parts) {
    if (structureElement.parts.length > 0) {
      // NO data needed in this layer
      if (handleCheckIfNot(structureElement.link, "")) {
        // data needed in this layer
        handleMergeData(structureElement, data, itemId);
      } else {
        handleMergeElementItems(structureElement.parts, data, itemId);
      }
    } else {
      // single dom
      if (handleCheckIfNot(structureElement.link, "")) {
        // data needed in this layer
        handleMergeData(structureElement, data, itemId);
      } else {
        // NO data needed in this layer
      }
    }
  } else {
    if (structureElement.length > 0) {
      // NO data needed in this layer
      handleMergeElementItems(structureElement, data);
    } else {
      // single dom
      if (handleCheckIfNot(structureElement.link, "")) {
        // elementData__parent = structureElement;

        // data needed in this layer
        handleMergeData(structureElement, data, itemId);
      } else {
        // NO data needed in this layer
      }
    }
  }

  return structureElement
}