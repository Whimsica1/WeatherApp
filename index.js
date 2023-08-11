const temp = document.getElementById("temp"),
  date = document.getElementById("date-time"),
  condition = document.getElementById("condition"),
  rain = document.getElementById("rain"),
  mainIcon = document.getElementById("icon"),
  currentLocation = document.getElementById("location"),
  uvIndex = document.querySelector(".uv-index"),
  uvText = document.querySelector(".uv-text"),
  windSpeed = document.querySelector(".wind-speed"),
  sunRise = document.querySelector(".sun-rise"),
  sunSet = document.querySelector(".sun-set"),
  humidity = document.querySelector(".humidity"),
  visibilty = document.querySelector(".visibilty"),
  humidityStatus = document.querySelector(".humidity-status"),
  airQuality = document.querySelector(".air-quality"),
  airQualityStatus = document.querySelector(".air-quality-status"),
  visibilityStatus = document.querySelector(".visibilty-status"),
  searchForm = document.querySelector("#search"),
  search = document.querySelector("#query"),
  celciusBtn = document.querySelector(".celcius"),
  fahrenheitBtn = document.querySelector(".fahrenheit"),
  tempUnit = document.querySelectorAll(".temp-unit"),
  hourlyBtn = document.querySelector(".hourly"),
  weekBtn = document.querySelector(".week"),
  weatherCards = document.querySelector("#weather-cards");


let currentCity = "";
let currentUnit = "c";
let hourlyorWeek = "week";
let cities = [
  {
    "country": "CN",
    "name": "Beijing",
    "lat": "39.9042",
    "lng": "116.4074"
  },
  {
    "country": "IN",
    "name": "New Delhi",
    "lat": "28.6139",
    "lng": "77.2090"
  },
  {
    "country": "US",
    "name": "Washington, D.C.",
    "lat": "38.9072",
    "lng": "-77.0369"
  },
  {
    "country": "ID",
    "name": "Jakarta",
    "lat": "-6.2088",
    "lng": "106.8456"
  },
  {
    "country": "PK",
    "name": "Islamabad",
    "lat": "33.6844",
    "lng": "73.0479"
  },
  {
    "country": "BR",
    "name": "Brasília",
    "lat": "-15.7801",
    "lng": "-47.9292"
  },
  {
    "country": "NG",
    "name": "Abuja",
    "lat": "9.0579",
    "lng": "7.4951"
  },
  {
    "country": "RU",
    "name": "Moscow",
    "lat": "55.7558",
    "lng": "37.6176"
  },
  {
    "country": "JP",
    "name": "Tokyo",
    "lat": "35.682839",
    "lng": "139.759455"
  },
  {
    "country": "MX",
    "name": "Mexico City",
    "lat": "19.4326",
    "lng": "-99.1332"
  },
  {
    "country": "PH",
    "name": "Manila",
    "lat": "14.5995",
    "lng": "120.9842"
  },
  {
    "country": "EG",
    "name": "Cairo",
    "lat": "30.0444",
    "lng": "31.2357"
  },
  {
    "country": "BD",
    "name": "Dhaka",
    "lat": "23.8103",
    "lng": "90.4125"
  },
  {
    "country": "TR",
    "name": "Ankara",
    "lat": "39.9334",
    "lng": "32.8597"
  },
  {
    "country": "KR",
    "name": "Seoul",
    "lat": "37.5665",
    "lng": "126.9780"
  },
  {
    "country": "DE",
    "name": "Berlin",
    "lat": "52.5200",
    "lng": "13.4050"
  },
  {
    "country": "FR",
    "name": "Paris",
    "lat": "48.8566",
    "lng": "2.3522"
  },
  {
    "country": "IT",
    "name": "Rome",
    "lat": "41.9028",
    "lng": "12.4964"
  },
  {
    "country": "GB",
    "name": "London",
    "lat": "51.5074",
    "lng": "-0.1278"
  },
  {
    "country": "ES",
    "name": "Madrid",
    "lat": "40.4168",
    "lng": "-3.7038"
  },
  {
    "country": "AR",
    "name": "Buenos Aires",
    "lat": "-34.6118",
    "lng": "-58.4173"
  },
  {
    "country": "SA",
    "name": "Riyadh",
    "lat": "24.7136",
    "lng": "46.6753"
  },
  {
    "country": "IR",
    "name": "Tehran",
    "lat": "35.6892",
    "lng": "51.3890"
  },
  {
    "country": "TH",
    "name": "Bangkok",
    "lat": "13.7563",
    "lng": "100.5018"
  },
  {
    "country": "ZA",
    "name": "Pretoria",
    "lat": "-25.7461",
    "lng": "28.1881"
  },
  {
    "country": "CA",
    "name": "Ottawa",
    "lat": "45.4215",
    "lng": "-75.6972"
  },
  {
    "country": "AU",
    "name": "Canberra",
    "lat": "-35.2820",
    "lng": "149.1287"
  },
  {
    "country": "PE",
    "name": "Lima",
    "lat": "-12.0464",
    "lng": "-77.0428"
  },
  {
    "country": "MY",
    "name": "Kuala Lumpur",
    "lat": "3.1390",
    "lng": "101.6869"
  },
  {
    "country": "NL",
    "name": "Amsterdam",
    "lat": "52.3676",
    "lng": "4.9041"
  },
  {
    "country": "CL",
    "name": "Santiago",
    "lat": "-33.4489",
    "lng": "-70.6693"
  },
  {
    "country": "CO",
    "name": "Bogotá",
    "lat": "4.7110",
    "lng": "-74.0721"
  },
  {
    "country": "KW",
    "name": "Kuwait City",
    "lat": "29.3759",
    "lng": "47.9774"
  },
  {
    "country": "GR",
    "name": "Athens",
    "lat": "37.9838",
    "lng": "23.7275"
  },
  {
    "country": "SG",
    "name": "Singapore",
    "lat": "1.3521",
    "lng": "103.8198"
  },
  {
    "country": "AT",
    "name": "Vienna",
    "lat": "48.2082",
    "lng": "16.3738"
  },
  {
    "country": "AR",
    "name": "Buenos Aires",
    "lat": "-34.6118",
    "lng": "-58.4173"
  },
  {
    "country": "NG",
    "name": "Abuja",
    "lat": "9.0579",
    "lng": "7.4951"
  },
  {
    "country": "JP",
    "name": "Tokyo",
    "lat": "35.682839",
    "lng": "139.759455"
  },
  {
    "country": "MX",
    "name": "Mexico City",
    "lat": "19.4326",
    "lng": "-99.1332"
  },
  {
    "country": "PH",
    "name": "Manila",
    "lat": "14.5995",
    "lng": "120.9842"
  },
  {
    "country": "EG",
    "name": "Cairo",
    "lat": "30.0444",
    "lng": "31.2357"
  },
  {
    "country": "BD",
    "name": "Dhaka",
    "lat": "23.8103",
    "lng": "90.4125"
  },
  {
    "country": "TR",
    "name": "Ankara",
    "lat": "39.9334",
    "lng": "32.8597"
  },
  {
    "country": "KR",
    "name": "Seoul",
    "lat": "37.5665",
    "lng": "126.9780"
  },
  {
    "country": "DE",
    "name": "Berlin",
    "lat": "52.5200",
    "lng": "13.4050"
  },
  {
    "country": "FR",
    "name": "Paris",
    "lat": "48.8566",
    "lng": "2.3522"
  },
  {
    "country": "IT",
    "name": "Rome",
    "lat": "41.9028",
    "lng": "12.4964"
  },
  {
    "country": "GB",
    "name": "London",
    "lat": "51.5074",
    "lng": "-0.1278"
  },
  {
    "country": "ES",
    "name": "Madrid",
    "lat": "40.4168",
    "lng": "-3.7038"
  },
  {
    "country": "AR",
    "name": "Buenos Aires",
    "lat": "-34.6118",
    "lng": "-58.4173"
  },
  {
    "country": "SA",
    "name": "Riyadh",
    "lat": "24.7136",
    "lng": "46.6753"
  },
  {
    "country": "IR",
    "name": "Tehran",
    "lat": "35.6892",
    "lng": "51.3890"
  },
  {
    "country": "TH",
    "name": "Bangkok",
    "lat": "13.7563",
    "lng": "100.5018"
  },
  {
    "country": "ZA",
    "name": "Pretoria",
    "lat": "-25.7461",
    "lng": "28.1881"
  },
  {
    "country": "CA",
    "name": "Ottawa",
    "lat": "45.4215",
    "lng": "-75.6972"
  },
  {
    "country": "AU",
    "name": "Canberra",
    "lat": "-35.2820",
    "lng": "149.1287"
  },
  {
    "country": "PE",
    "name": "Lima",
    "lat": "-12.0464",
    "lng": "-77.0428"
  },
  {
    "country": "MY",
    "name": "Kuala Lumpur",
    "lat": "3.1390",
    "lng": "101.6869"
  },
  {
    "country": "NL",
    "name": "Amsterdam",
    "lat": "52.3676",
    "lng": "4.9041"
  },
  {
    "country": "CL",
    "name": "Santiago",
    "lat": "-33.4489",
    "lng": "-70.6693"
  },
  {
    "country": "CO",
    "name": "Bogotá",
    "lat": "4.7110",
    "lng": "-74.0721"
  },
  {
    "country": "KW",
    "name": "Kuwait City",
    "lat": "29.3759",
    "lng": "47.9774"
  },
  {
    "country": "GR",
    "name": "Athens",
    "lat": "37.9838",
    "lng": "23.7275"
  },
  {
    "country": "SG",
    "name": "Singapore",
    "lat": "1.3521",
    "lng": "103.8198"
  },
  {
    "country": "AT",
    "name": "Vienna",
    "lat": "48.2082",
    "lng": "16.3738"
  }
];




// function to get date and time
function getDateTime() {
  let now = new Date(),
    hour = now.getHours(),
    minute = now.getMinutes();

  let days = [
    "Sunday",
    "Here We Go Again",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // 12 hours format
  hour = hour % 12;
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  let dayString = days[now.getDay()];
  return `${dayString}, ${hour}:${minute}`;
}

//Updating date and time
date.innerText = getDateTime();
setInterval(() => {
  date.innerText = getDateTime();
}, 1000);

// function to get public ip address
function getPublicIp() {
  fetch("https://geolocation-db.com/json/", {
    method: "GET",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      currentCity = data.city;
      getWeatherData(data.city, currentUnit, hourlyorWeek);
    })
    .catch((err) => {
      console.error(err);
    });
}

getPublicIp();

// function to get weather data
function getWeatherData(city, unit, hourlyorWeek) {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let today = data.currentConditions;
      if (unit === "c") {
        temp.innerText = today.temp;
      } else {
        temp.innerText = celciusToFahrenheit(today.temp);
      }
      currentLocation.innerText = data.resolvedAddress;
      condition.innerText = today.conditions;
      rain.innerText = "Prec - " + today.precip + "%";
      uvIndex.innerText = today.uvindex;
      windSpeed.innerText = today.windspeed;
      measureUvIndex(today.uvindex);
      mainIcon.src = getIcon(today.icon);
      changeBackground(today.icon);
      humidity.innerText = today.humidity + "%";
      updateHumidityStatus(today.humidity);
      visibilty.innerText = today.visibility;
      updateVisibiltyStatus(today.visibility);
      airQuality.innerText = today.winddir;
      updateAirQualityStatus(today.winddir);
      if (hourlyorWeek === "hourly") {
        updateForecast(data.days[0].hours, unit, "day");
      } else {
        updateForecast(data.days, unit, "week");
      }
      sunRise.innerText = covertTimeTo12HourFormat(today.sunrise);
      sunSet.innerText = covertTimeTo12HourFormat(today.sunset);
    })
    .catch((err) => {
      alert("City not found in our database");
    });
}

//function to update Forecast
function updateForecast(data, unit, type) {
  weatherCards.innerHTML = "";
  let day = 0;
  let numCards = 0;
  if (type === "day") {
    numCards = 24;
  } else {
    numCards = 7;
  }
  for (let i = 0; i < numCards; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let dayName = getHour(data[day].datetime);
    if (type === "week") {
      dayName = getDayName(data[day].datetime);
    }
    let dayTemp = data[day].temp;
    if (unit === "f") {
      dayTemp = celciusToFahrenheit(data[day].temp);
    }
    let iconCondition = data[day].icon;
    let iconSrc = getIcon(iconCondition);
    let tempUnit = "°C";
    if (unit === "f") {
      tempUnit = "°F";
    }
    card.innerHTML = `
                <h2 class="day-name">${dayName}</h2>
            <div class="card-icon">
              <img src="${iconSrc}" class="day-icon" alt="" />
            </div>
            <div class="day-temp">
              <h2 class="temp">${dayTemp}</h2>
              <span class="temp-unit">${tempUnit}</span>
            </div>
  `;
    weatherCards.appendChild(card);
    day++;
  }
}

// function to change weather icons
function getIcon(condition) {
  if (condition === "partly-cloudy-day") {
    return "https://i.ibb.co/PZQXH8V/27.png";
  } else if (condition === "partly-cloudy-night") {
    return "https://i.ibb.co/Kzkk59k/15.png";
  } else if (condition === "rain") {
    return "https://i.ibb.co/kBd2NTS/39.png";
  } else if (condition === "clear-day") {
    return "https://i.ibb.co/rb4rrJL/26.png";
  } else if (condition === "clear-night") {
    return "https://i.ibb.co/1nxNGHL/10.png";
  } else {
    return "https://i.ibb.co/rb4rrJL/26.png";
  }
}

// function to change background depending on weather conditions
function changeBackground(condition) {
  const body = document.querySelector("body");
  let bg = "";
  if (condition === "partly-cloudy-day") {
    bg = "https://i.ibb.co/qNv7NxZ/pc.webp";
  } else if (condition === "partly-cloudy-night") {
    bg = "https://i.ibb.co/RDfPqXz/pcn.jpg";
  } else if (condition === "rain") {
    bg = "https://i.ibb.co/h2p6Yhd/rain.webp";
  } else if (condition === "clear-day") {
    bg = "https://i.ibb.co/WGry01m/cd.jpg";
  } else if (condition === "clear-night") {
    bg = "https://i.ibb.co/kqtZ1Gx/cn.jpg";
  } else {
    bg = "https://i.ibb.co/qNv7NxZ/pc.webp";
  }
  body.style.backgroundImage = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${bg})`;
}

//get hours from hh:mm:ss
function getHour(time) {
  let hour = time.split(":")[0];
  let min = time.split(":")[1];
  if (hour > 12) {
    hour = hour - 12;
    return `${hour}:${min} PM`;
  } else {
    return `${hour}:${min} AM`;
  }
}

// convert time to 12 hour format
function covertTimeTo12HourFormat(time) {
  let hour = time.split(":")[0];
  let minute = time.split(":")[1];
  let ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  let strTime = hour + ":" + minute + " " + ampm;
  return strTime;
}

// function to get day name from date
function getDayName(date) {
  let day = new Date(date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day.getDay()];
}

// function to get uv index status
function measureUvIndex(uvIndex) {
  if (uvIndex <= 2) {
    uvText.innerText = "Low";
  } else if (uvIndex <= 5) {
    uvText.innerText = "Moderate";
  } else if (uvIndex <= 7) {
    uvText.innerText = "High";
  } else if (uvIndex <= 10) {
    uvText.innerText = "Very High";
  } else {
    uvText.innerText = "Vamps Stay at home";
  }
}

// function to get humidity status
function updateHumidityStatus(humidity) {
  if (humidity <= 30) {
    humidityStatus.innerText = "Low";
  } else if (humidity <= 60) {
    humidityStatus.innerText = "Moderate";
  } else {
    humidityStatus.innerText = "Moist 😏";
  }
}

// function to get visibility status
function updateVisibiltyStatus(visibility) {
  if (visibility <= 0.03) {
    visibilityStatus.innerText = "Dense Fog";
  } else if (visibility <= 0.16) {
    visibilityStatus.innerText = "Moderate Fog";
  } else if (visibility <= 0.35) {
    visibilityStatus.innerText = "Light Fog";
  } else if (visibility <= 1.13) {
    visibilityStatus.innerText = "Very Light Fog";
  } else if (visibility <= 2.16) {
    visibilityStatus.innerText = "Light Mist";
  } else if (visibility <= 5.4) {
    visibilityStatus.innerText = "Very Light Mist";
  } else if (visibility <= 10.8) {
    visibilityStatus.innerText = "Clear Air";
  } else {
    visibilityStatus.innerText = "Very Clear Air";
  }
}

// function to get air quality status
function updateAirQualityStatus(airquality) {
  if (airquality <= 50) {
    airQualityStatus.innerText = "Good ❤️";
  } else if (airquality <= 100) {
    airQualityStatus.innerText = "Moderate😐";
  } else if (airquality <= 150) {
    airQualityStatus.innerText = "Unhealthy for Sensitive Groups😷";
  } else if (airquality <= 200) {
    airQualityStatus.innerText = "Unhealthy😷";
  } else if (airquality <= 250) {
    airQualityStatus.innerText = "Very Unhealthy 😨";
  } else {
    airQualityStatus.innerText = "NOPE😱";
  }
}

// function to handle search form
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = search.value;
  if (location) {
    currentCity = location;
    getWeatherData(location, currentUnit, hourlyorWeek);
  }
});

// function to conver celcius to fahrenheit
function celciusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1);
}


var currentFocus;
search.addEventListener("input", function (e) {
  removeSuggestions();
  var a,
    b,
    i,
    val = this.value;
  if (!val) {
    return false;
  }
  currentFocus = -1;

  a = document.createElement("ul");
  a.setAttribute("id", "suggestions");

  this.parentNode.appendChild(a);

  for (i = 0; i < cities.length; i++) {
    /*check if the item starts with the same letters as the text field value:*/
    if (
      cities[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()
    ) {
      /*create a li element for each matching element:*/
      b = document.createElement("li");
      /*make the matching letters bold:*/
      b.innerHTML =
        "<strong>" + cities[i].name.substr(0, val.length) + "</strong>";
      b.innerHTML += cities[i].name.substr(val.length);
      /*insert a input field that will hold the current array item's value:*/
      b.innerHTML += "<input type='hidden' value='" + cities[i].name + "'>";
      /*execute a function when someone clicks on the item value (DIV element):*/
      b.addEventListener("click", function (e) {
        /*insert the value for the autocomplete text field:*/
        search.value = this.getElementsByTagName("input")[0].value;
        removeSuggestions();
      });

      a.appendChild(b);
    }
  }
});
/*execute a function presses a key on the keyboard:*/
search.addEventListener("keydown", function (e) {
  var x = document.getElementById("suggestions");
  if (x) x = x.getElementsByTagName("li");
  if (e.keyCode == 40) {
    /*If the arrow DOWN key
      is pressed,
      increase the currentFocus variable:*/
    currentFocus++;
    /*and and make the current item more visible:*/
    addActive(x);
  } else if (e.keyCode == 38) {
    /*If the arrow UP key
      is pressed,
      decrease the currentFocus variable:*/
    currentFocus--;
    /*and and make the current item more visible:*/
    addActive(x);
  }
  if (e.keyCode == 13) {
    /*If the ENTER key is pressed, prevent the form from being submitted,*/
    e.preventDefault();
    if (currentFocus > -1) {
      /*and simulate a click on the "active" item:*/
      if (x) x[currentFocus].click();
    }
  }
});
function addActive(x) {
  /*a function to classify an item as "active":*/
  if (!x) return false;
  /*start by removing the "active" class on all items:*/
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add("active");
}
function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
}

function removeSuggestions() {
  var x = document.getElementById("suggestions");
  if (x) x.parentNode.removeChild(x);
}

fahrenheitBtn.addEventListener("click", () => {
  changeUnit("f");
});
celciusBtn.addEventListener("click", () => {
  changeUnit("c");
});

// function to change unit
function changeUnit(unit) {
  if (currentUnit !== unit) {
    currentUnit = unit;
    tempUnit.forEach((elem) => {
      elem.innerText = `°${unit.toUpperCase()}`;
    });
    if (unit === "c") {
      celciusBtn.classList.add("active");
      fahrenheitBtn.classList.remove("active");
    } else {
      celciusBtn.classList.remove("active");
      fahrenheitBtn.classList.add("active");
    }
    getWeatherData(currentCity, currentUnit, hourlyorWeek);
  }
}

hourlyBtn.addEventListener("click", () => {
  changeTimeSpan("hourly");
});
weekBtn.addEventListener("click", () => {
  changeTimeSpan("week");
});

// function to change hourly to weekly or vice versa
function changeTimeSpan(unit) {
  if (hourlyorWeek !== unit) {
    hourlyorWeek = unit;
    if (unit === "hourly") {
      hourlyBtn.classList.add("active");
      weekBtn.classList.remove("active");
    } else {
      hourlyBtn.classList.remove("active");
      weekBtn.classList.add("active");
    }
    getWeatherData(currentCity, currentUnit, hourlyorWeek);
  }
}



// Cities add your own to get in search