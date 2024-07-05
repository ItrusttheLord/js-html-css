const apiKey = "48958e0cfde10009843265f7320f23f2";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
// const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const checkWeather = async function (city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }

  let data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°F";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "mph";

  if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "assets/images/clouds.png";
  }
  if (data.weather[0].main === "Clear") {
    weatherIcon.src = "assets/images/clear.png";
  }
  if (data.weather[0].main === "Rain") {
    weatherIcon.src = "assets/images/rain.png";
  }
  if (data.weather[0].main === "Drizzle") {
    weatherIcon.src = "assets/images/drizzle.png";
  }
  if (data.weather[0].main === "Mist") {
    weatherIcon.src = "assets/images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
};

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
