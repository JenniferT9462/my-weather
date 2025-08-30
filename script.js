console.log("Hello from script.js");

var newOrleansWeather = {
  latitude: 29.95,
  longitude: -90.07,
  current_weather: {
    temperature: 31.2,
    windspeed: 4.5,
    weathercode: 1,
  },
};

onEvent("searchBtn", "click", function () {
  // Display weather data
  setText("temp", newOrleansWeather.current_weather.temperature);
  setText("wind", newOrleansWeather.current_weather.windspeed);
  setText("code", newOrleansWeather.current_weather.weathercode);
});
