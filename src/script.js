//FUNCTIONS

function search(city) {
  let apiKey = "aef208e4266d921b0a65e7200cab5d80";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeatherinCity);
  search(city);

}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSubmit);



//DisplayWeather


  function displayWeatherinCity(response) {
  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;

}

//Get current position

function displayPosition(position) {
  let apiKey = "aef208e4266d921b0a65e7200cab5d80";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherinCity);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(displayPosition);
}




//Unit conversions
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

let now = new Date();
let date = now.getDate();
let currentHour = now.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let currentWeekday = weekDays[now.getDay()];

let dateTime = document.querySelector(".date-time");
dateTime.innerHTML = `${currentWeekday}, ${currentHour}:${currentMinutes}`;

fahrenheit.addEventListener("click",convertToFahrenheit);
celsius.addEventListener("click", convertToCelsius);


let button = document.querySelector("#current-position");
button.addEventListener("click", getCurrentPosition);

search("Berlin")


