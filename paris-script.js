console.log("Hello from paris.js!");

// var parisWeather = {
//   current_weather: {
//     time: "2025-08-30T18:15",
//     interval: 900,
//     temperature: 20.5,
//     windspeed: 13.2,
//     winddirection: 202,
//     is_day: 1,
//     weathercode: 3,
//   },
// };
var parisWeather = {};


onEvent("show-paris", "click", function () {
  fetchParisWeather();
  // Display weather data
  // updateWeatherCard(parisWeather);
  // setText("temp", parisWeather.current_weather.temperature);
  // setText("wind", parisWeather.current_weather.windspeed);
  // setText("code", parisWeather.current_weather.weathercode);
});

function fetchParisWeather() {
  console.log("Fetch weather for Paris");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=48.8588897&longitude=2.3200410217200766&current_weather=true",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      parisWeather = result;
      updateWeatherCard(parisWeather, "Paris");
      console.log(parisWeather);
      console.log(parisWeather.current_weather.temperature);
    })
    .catch((error) => console.error(error));
}


function updateWeatherCard(weather, cityName) {
  
  setText("city-name", cityName + " Weather");
  setText("temp", weather.current_weather.temperature);
  setText("wind", weather.current_weather.windspeed);
  setText("code", weather.current_weather.weathercode);
}
