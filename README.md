To help you create a guide for your weather app, here is a `README.md` file that explains the project's structure and provides a step-by-step guide for students to build it. It focuses on how the different files work together and what each piece of code does.

# 🌦️ My Weather App

Welcome to the **My Weather App** project! This guide will walk you through the process of building a simple weather application using HTML, CSS (via Bootstrap), and JavaScript. You'll learn how to connect your app to a live weather API, handle data, and display it on a webpage.

---

## 🏗️ Project Structure

This project is organized into several files, each with a specific purpose:

* `index.html`: The main file that defines the structure and layout of our app. It's the "body" of our app where all the visible elements are.
* `helpers.js`: A helper library with useful functions for common tasks, like setting text or handling button clicks. This file simplifies our code so we don't have to write the same things over and over again.
* `script.js`: The primary JavaScript file that fetches weather data for **New Orleans** and updates the app's display.
* `atlanta-script.js`, `seattle-script.js`, `paris-script.js`: Individual script files that handle fetching and displaying weather for **Atlanta**, **Seattle**, and **Paris**, respectively.
* `test-error.js` (Optional): A script to demonstrate what happens when an API call fails, which is a great way to learn about error handling.

---

## 👨‍💻 Step-by-Step Build Guide

### Step 1: Set up the HTML (User Interface)

Open `index.html`. This file is already set up for you. 
It uses **Bootstrap**, a popular CSS framework, to make the app look clean without needing to write a lot of CSS.

The key elements are:

* A `card` container that holds all the weather information.
* `span` elements with specific `id`s (`temp`, `wind`, `code`) where our JavaScript will insert the weather data.
* Four buttons with `id`s (`show-nola`, `show-atlanta`, `show-paris`, `show-seattle`) that users can click to see different city's weather.
* `script` tags at the bottom that link to our JavaScript files. The order is important: `helpers.js` must be loaded first because our other scripts depend on the functions it provides.

---

### Step 2: Understand the Helper Functions

Open `helpers.js`. This file contains pre-written functions that make our main scripts easier to read and write. The two most important functions for this project are:

* `onEvent(id, event, handler)`: This function **attaches an event listener** to an HTML element. For example, `onEvent("show-nola", "click", function() { ... });` means "when the element with the ID `show-nola` is clicked, run the code inside the function."
* `setText(id, text)`: This function **changes the text content** of an HTML element. For example, `setText("temp", "25");` will change the content of the `span` with the `id` `temp` to "25".

---

### Step 3: Fetch Data for New Orleans

Now, let's look at `script.js`.

1.  **Event Listener**: The code `onEvent("show-nola", "click", function () { fetchNewOrleansWeather(); });` tells the app what to do when the "New Orleans" button is clicked. It calls the `fetchNewOrleansWeather()` function.

2.  **`fetchNewOrleansWeather()` Function**: This is the core of our app!
    * It uses the `fetch()` API to make a **GET request** to a specific **URL**. This URL is an API endpoint from Open-Meteo, which provides weather data.
    * The URL includes the **latitude and longitude** for New Orleans (`latitude=29.95&longitude=-90.07`).
    * The `.then()` block handles the **API's response**. It first converts the response into a JSON object (`response.json()`), which is a format that JavaScript can easily work with.
    * The next `.then()` block takes that JSON data (`result`), saves it to the `newOrleansWeather` variable, and then calls `updateWeatherCard()`.

3.  **`updateWeatherCard()` Function**: This function is responsible for **displaying the data**.
    * It takes the weather data (`weather`) and a city name (`cityName`) as arguments.
    * It uses `setText()` to update the `city-name`, `temp`, `wind`, and `code` elements on the page with the relevant information from the JSON data (e.g., `weather.current_weather.temperature`).

---

### Step 4: Add Other Cities

The process for **Atlanta**, **Seattle**, and **Paris** is almost identical to New Orleans.

* Open `atlanta-script.js`, `seattle-script.js`, and `paris-script.js`.
* You'll notice that each file has its own `onEvent()` listener for its specific button.
* Each file also has its own `fetch*Weather()` function, which calls the same Open-Meteo API but with **different latitude and longitude coordinates** for the respective city.
* All three files use the same `updateWeatherCard()` function, demonstrating how a reusable function can simplify your code!

---

### Step 5: Test the App

To run your app, you'll need to open `index.html` in your web browser. A simple way is to double-click the file. If you're using a code editor like VS Code, you can use an extension like "Live Server" to run a local web server, which is better for more complex projects.

* Click on each button and watch the weather card update with the correct information for each city.
* Open your browser's **Developer Console** (usually by pressing **F12** or **Ctrl+Shift+I**). You'll see the `console.log()` and `console.info()` messages we included in our scripts, which is a great way to debug and see what's happening behind the scenes.

---

### Step 6: Explore Error Handling (Optional)

Open `test-error.js`. This file shows what happens when an API call fails.

* The `fetchErrorWeather()` function uses a deliberately bad latitude (`latitude=200`) that the API doesn't recognize.
* The `.catch()` block is a **critical part of error handling**. It "catches" any errors that occur during the fetch operation.
* Inside the `.catch()` block, we can log the error to the console (`console.error()`) and show a user-friendly message, which is important for creating a robust application.

You can enable this functionality by uncommenting the `script` tag for `test-error.js` and the `button` tag for `show-error` in your `index.html` file.

Now that you've built the app and understand how it works, what's a new feature you might want to add?