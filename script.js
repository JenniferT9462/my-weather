console.log("Hello from script.js");

// var newOrleansWeather = {
//     "current_weather": {
//         "time": "2025-08-30T18:15",
//         "interval": 900,
//         "temperature": 28.0,
//         "windspeed": 11.1,
//         "winddirection": 347,
//         "is_day": 1,
//         "weathercode": 3
//     }
// };

var newOrleansWeather = {};
// updateWeatherCard();



onEvent("show-nola", "click", function () {
  fetchNewOrleansWeather();
  // Display weather data
  updateWeatherCard(newOrleansWeather);
  // setText("temp", newOrleansWeather.current_weather.temperature);
  // setText("wind", newOrleansWeather.current_weather.windspeed);
  // setText("code", newOrleansWeather.current_weather.weathercode);
});

function fetchNewOrleansWeather() {
  console.log("Fetch weather for New Orleans");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=29.95&longitude=-90.07&current_weather=true",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      newOrleansWeather = result;
      updateWeatherCard(newOrleansWeather);
      console.log(newOrleansWeather);
      console.log(newOrleansWeather.current_weather.temperature);
      console.log(newOrleansWeather.current_weather.weathercode);
    })

    .catch((error) => console.error(error));
}


function updateWeatherCard(weather) {
  setText("temp", weather.current_weather.temperature);
  setText("wind", weather.current_weather.windspeed);
  setText("code", weather.current_weather.weathercode);
}
