let now = new Date();
let date = now.getDate();
if (date < 10) {
  date = `0${date}`;
}
let month = now.getMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}
let year = now.getFullYear();
document.getElementById("current_date").innerHTML = `${date}/${month}/${year}`;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
document.getElementById("current_day_time").innerHTML = `${day}`;
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
document.getElementById("current_time").innerHTML = `${hour}:${minutes}`;

function displayweatherCondition(response) {
  console.log(response.data);
  document.querySelector("#your_enter_city").innerHTML = response.data.name;
  let showTemperatureForCity = Math.round(response.data.main.temp);
  document.querySelector("#current_temperature").innerHTML =
    showTemperatureForCity;
  document.querySelector("#enter_country").innerHTML =
    response.data.sys.country;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#max_temperature").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#min_temperature").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#pressure").innerHTML = response.data.main.pressure;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function dataEnter(event) {
  event.preventDefault();
  let apiKey = "30c4109a1cd7a0698b53f1fcf195aefc";
  let units = "metric";
  let city = document.querySelector("#enter_city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayweatherCondition);
}
let citySearch = document.querySelector("#search-form");
citySearch.addEventListener("submit", dataEnter);

function myCityForecast(response) {
  document.querySelector("#tempMinOne").innerHTML = response.main.temp_min;
}
function forecast(event) {
  event.preventDefault();
  let apiKeyForecast = "30c4109a1cd7a0698b53f1fcf195aefc";
  let urlForecast = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&appid={apiKeyForecast}`;
  axios.get(urlForecast).then(myCityForecast);
}
