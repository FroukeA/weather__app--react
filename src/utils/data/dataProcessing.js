// data
import { forecast_data } from "../../constants/mock";
import {
  forecast__content,
  weather__content
} from "../../constants/conf";

// functions
let handle = null;
// components
// variables
// *** weather and forecast ***
// let currentCity = {
//   name: "",
//   data: {},
// };

// let sunrise = null;
// let sunset = null;

// const currentDate = new Date();

// let currentDay = null;

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// *** merge ***
let data = null;

let type = null;
let item = null;

let tempElementPart = null; // foreCast = list
let elementPart__parent = null; // foreCast = card
let elementPart__child = null; // foreCast = structureChild
let elementData__parent = null; // foreCast = header or article
// let elementData__child = null; // foreCast = h4 or p

let elementPart__parentId = null; // foreCast = card id

let parents = {};

// date
function convertData(object, key, data) {
  switch (key) {
    case 'dt':
      return handleCreateDay(handleCreateDate(data.dt).getDay());
    case 'temp':
      return object[key].day.toFixed(1)
    default:
      return object[key]
  }
}

// const handleChangeDate = () => {
// const minutes =
//   currentDate.getMinutes() < 10
//     ? "0" + currentDate.getMinutes()
//     : currentDate.getMinutes();

//   currentDay = currentDate.getDay();
// };

const handleCreateDate = (stamp) => {
  return new Date(stamp * 1000);
};

const handleCreateDay = (day) => {
  let tempCurrentDay = day;

  if (tempCurrentDay < 6) {
    tempCurrentDay = tempCurrentDay + 1;
  } else if (tempCurrentDay === 6) {
    tempCurrentDay = 0;
  }

  return days[tempCurrentDay]
}

// weather and forecast
// const handleCelsiusToFahrenheit = (value) => {
//   const temp = (value * 9) / 5 + 32;
//   return temp;
// };

// const handleFahrenheitToCelsius = (value) => {
//   const temp = ((value - 32) * 5) / 9;
//   return temp;
// };

// function handleCurrentWeatherLocation() {
//   sunrise = handleCreateDate(currentCity.data.current.sunrise);
//   sunset = handleCreateDate(currentCity.data.current.sunset);

//   const weather__elements = [
//     {
//       class: "#location",
//       content: currentCity.name,
//     },
//     {
//       class: "#temp",
//       content: currentCity.data.current.temp.toFixed(1),
//     },
//     {
//       class: "#rain",
//       content: currentCity.data.current.rain
//         ? `${currentCity.data.current.rain}mm/h`
//         : `0mm/h`,
//     },
//     {
//       class: "#humidity",
//       content: `${currentCity.data.current.humidity}%`,
//     },
//     {
//       class: "#tempCold",
//       content: currentCity.data.daily[0].temp.min.toFixed(1),
//     },
//     {
//       class: "#tempHot",
//       content: currentCity.data.daily[0].temp.max.toFixed(1),
//     },
//     {
//       class: "#wind",
//       content: `${currentCity.data.current.wind_speed}m/sec`,
//     },
//     {
//       class: "#weather__description",
//       content: currentCity.data.current.weather[0].description,
//     },
//     {
//       class: "#sunrise",
//       content: `${sunrise.getHours() < 10 ? "0" + sunrise.getHours() : sunrise.getHours()
//         }: ${sunrise.getMinutes() < 10
//           ? "0" + sunrise.getMinutes()
//           : sunrise.getMinutes()
//         }`,
//     },
//     {
//       class: "#sunset",
//       content: `${sunset.getHours() < 10 ? "0" + sunset.getHours() : sunset.getHours()
//         }: ${sunset.getMinutes() < 10
//           ? "0" + sunset.getMinutes()
//           : sunset.getMinutes()
//         }`,
//     },
//   ];
// }

// function handleDailyWeatherLocation() {
//   let tempCurrentDay = currentDay;

//   currentCity.data.daily.map((item, i) => {
//     if (i !== 0) {
//       if (tempCurrentDay < 6) {
//         tempCurrentDay = tempCurrentDay + 1;
//       } else if (tempCurrentDay === 6) {
//         tempCurrentDay = 0;
//       }
//     }
//   });
// }

// merge

function dataMerge(elementData__child, id) {
  const tempData = { ...parents[elementData__child.parentId] };
  tempData.parts[id] = elementData__child;


  mergeDataStructure();
}

function mergeDataStructure() {
  if (elementPart__parent.ref === 'forecast') {
    tempElementPart.parts[elementPart__parentId] = elementPart__parent; // forecast
  }
  if (elementPart__parent.ref === 'weather') {
    tempElementPart = elementPart__parent; // weather  
  }

  // forecast

  handle(type, item)
}

function createDataElement(d, i, t) {
  type = t;
  item = i;

  if (type === 'forecastContent') {
    data = d.slice(0, d.length - 1);
  } else if (type === 'weatherContent') {
    data = d[0];
  }

  handleMergeDataElements(item);
}


export function handleReceiveData(d, handleData) {
  // d  = {
  //   name: "",
  //   data: {},
  // }
  // console.log(888, d.data.current)

  handle = handleData;

  // weather
  createDataElement(d.data.daily, weather__content, "weatherContent");
  // daily data.data.daily
  createDataElement(d.data.daily, forecast__content, "forecastContent");
  // hourly -- later
}

function handleMergeDataElements(item, key) {
  if (item.parts.length > 0) {
    // Nested DOM
    mergeDataElementItems(item, key)
  } else {
    // Single DOM
    mergeDataElement(item, 0);
  }
}

export function mergeDataElementItems(structureEl) {
  elementPart__parent = null;

  structureEl.parts.map((elementPart, elementPartId) => {
    // return mergeDataElement(elementPart, elementPartId);
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
              elementPart__parentId = dataId;
              elementPart__parent = JSON.parse(JSON.stringify(elementPart.parts[0])); // foreCast = card === deep copy
              // elementPart__parent = { ...elementPart.parts[0] }; // foreCast = card === copy
              elementPart__child = { ...elementPart__parent.parts[0] }; // foreCast = structureChild
              return elementPart__parent.type === "card"
                ? handlePrepareData(elementPart__child, dataItem)
                : null;
            })
          } else {
            elementPart__parentId = 0;
            elementPart__parent = { ...elementPart }; // weather = weather article === deep copy

            elementPart__child = { ...elementPart__parent.parts[0] }; // weather = structureChild
            return elementPart__parent.type === "part"
              ? handlePrepareData(elementPart__child, data)
              : null;
          }
        }
      }
    }

  });
}

export function mergeDataElement(elementPart, elementPartId) {
  let elementPart__parent = null;

  if (elementPart.data.length === 0) {
    mergeDataElementItems(elementPart);
  } else {
    // data comes from external source, data does NOT come from constants
    if (elementPart.parts[0] !== undefined) {
      // const data = forecast_data;

      if (elementPart.parts.length > 0) {
        // Nested DOM
        tempElementPart = elementPart; // foreCast = list

        data.map((dataItem, dataId) => {
          elementPart__parentId = dataId;
          elementPart__parent = JSON.parse(JSON.stringify(elementPart.parts[0])); // foreCast = card === deep copy
          // elementPart__parent = { ...elementPart.parts[0] }; // foreCast = card === copy
          elementPart__child = { ...elementPart__parent.parts[0] }; // foreCast = structureChild

          return elementPart__parent.type === "card"
            ? handlePrepareData(elementPart__child, dataItem)
            : null;
        })
      } else {
        elementPart__parent = { ...elementPart };
        return (elementPart__parent.type === "card"
          ? (handleMerge(elementPart__parent, data, elementPartId))
          : null)
      }
    }
  }
}

export function handlePrepareData(elementPart__child, dataItem) {
  handleMerge(elementPart__child, dataItem, null);
}

export function handleMergeElementItems(array, data) {
  return array.map((item, itemId) => {
    return handleMerge(item, data, itemId);
  });
}

export function handleMergeData(structureElement, data, id) {
  let result = 'test';

  function get(object, key) {
    const keys = key.split('.');
    for (let i = 0; i < keys.length; i++) {
      if (!object.hasOwnProperty(keys[i])) {
        return null;
      }

      result = convertData(object, keys[i], data);
      object = object[keys[i]];
    }

    return result;
  }

  let elementData__child = { ...structureElement }

  elementData__child.label = get(data, structureElement.link);

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
      handleMergeElementItems(structureElement.parts, data);
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
        // renderComponent(structureElement);
      }
    }
  }

  return structureElement
}

export function handleCheckIfNot(element, condition) {
  return element !== condition;
}