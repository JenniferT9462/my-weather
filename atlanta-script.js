console.log("Hello from atlanta-script.js");

// var atlantaWeather = {
//   current_weather: {
//     time: "2025-08-30T18:00",
//     interval: 900,
//     temperature: 28.8,
//     windspeed: 11.3,
//     winddirection: 68,
//     is_day: 1,
//     weathercode: 0,
//   },
// };

var atlantaWeather = {};


onEvent("show-atlanta", "click", function () {
  fetchAtlantaWeather();
  // Display weather data
  updateWeatherCard(atlantaWeather);
  // setText("temp", atlantaWeather.current_weather.temperature);
  // setText("wind", atlantaWeather.current_weather.windspeed);
  // setText("code", atlantaWeather.current_weather.weathercode);
});

function fetchAtlantaWeather() {
  console.log("Fetch weather for Atlanta");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=33.7489924&longitude=-84.3902644&current_weather=true",
    requestOptions
  )
    .then((response) => response.json())
    .then(function (result) {
      console.log(result);
      atlantaWeather = result;
      updateWeatherCard(atlantaWeather);
      console.log(atlantaWeather);
      console.log(atlantaWeather.current_weather.temperature);
    })
    .catch((error) => console.error(error));
}


function updateWeatherCard(weather) {
        setText("temp", weather.current_weather.temperature);
        setText("wind", weather.current_weather.windspeed);
        setText("code", weather.current_weather.weathercode);
    }

