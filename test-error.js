console.log("Hello from test-error.js");

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

var errorWeather = {};
// updateWeatherCard();



onEvent("show-error", "click", function () {
    fetchErrorWeather();
  // Display weather data
  if (errorWeather.current_weather) {
    updateWeatherCard(errorWeather);
  } else {
    console.log("Weather not loaded yet!");
  }
  
  // setText("temp", newOrleansWeather.current_weather.temperature);
  // setText("wind", newOrleansWeather.current_weather.windspeed);
  // setText("code", newOrleansWeather.current_weather.weathercode);
});

function fetchErrorWeather() {
  console.log("Fetch weather for New Orleans");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=200&longitude=122.330062&current_weather=true",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      errorWeather = result;
      updateWeatherCard(errorWeather);
      console.log(errorWeather);
      console.log(errorWeather.current_weather.temperature);
      console.log(errorWeather.current_weather.weathercode);
    })

    .catch((error) => {
      console.error("Fetch failed:", error);
      showError("Could not load weather data. Please check your connection and try again.");
    });
}

function updateWeatherCard(weather) {
  setText("temp", weather.current_weather.temperature);
  setText("wind", weather.current_weather.windspeed);
  setText("code", weather.current_weather.weathercode);
}
