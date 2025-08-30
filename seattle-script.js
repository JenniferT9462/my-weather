console.log("Hello from seattle-script.js!");

// var seattleWeather = {
//   current_weather: {
//     time: "2025-08-30T17:00",
//     interval: 900,
//     temperature: 27.0,
//     windspeed: 10.8,
//     winddirection: 75,
//     is_day: 1,
//     weathercode: 1,
//   },
// };
var seattleWeather = {};


onEvent("show-seattle", "click", function () {
  fetchSeattleWeather();
  // Display weather data
  updateWeatherCard(seattleWeather);
  // setText("temp", seattleWeather.current_weather.temperature);
  // setText("wind", seattleWeather.current_weather.windspeed);
  // setText("code", seattleWeather.current_weather.weathercode);
});

function fetchSeattleWeather() {
  console.log("Fetch weather for Seattle");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=47.6038321&longitude=-122.330062&current_weather=true",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      seattleWeather = result;
      updateWeatherCard(seattleWeather);
      console.log(seattleWeather);
      console.log(seattleWeather.current_weather.temperature);
    })
    .catch((error) => console.error(error));
}


function updateWeatherCard(weather) {
  setText("temp", weather.current_weather.temperature);
  setText("wind", weather.current_weather.windspeed);
  setText("code", weather.current_weather.weathercode);
}
