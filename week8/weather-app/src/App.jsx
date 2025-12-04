import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API_KEY = "816ef6d073d7499e8aa204723250312";

  // State for the API weather result
  const [weatherData, setWeatherData] = useState("");

  // State for the input box (live typing)
  const [userEnteredCity, setUserEnteredCity] = useState("");

  // State for the actual searched city (when clicking Search)
  const [currentCity, setCurrentCity] = useState("");

  // Build the API URL dynamically
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${currentCity}&aqi=no`;

  // Track typing in input box
  function handleChange(event) {
    setUserEnteredCity(event.target.value);
  }

  // When user presses Search button
  function handleClick() {
    if (!userEnteredCity) {
      alert("Please enter a city name!");
      return;
    }
    setCurrentCity(userEnteredCity); // triggers useEffect
  }

  // Fetch weather whenever "currentCity" changes
  useEffect(() => {
    if (!currentCity) return; // do nothing at first load

    async function fetchWeather() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setWeatherData(data); // update state
      } catch (err) {
        console.log("API fetch error:", err);
      }
    }

    fetchWeather();
  }, [currentCity]);

  return (
    <>
      <h1>Weather APP</h1>

      <label>Enter your city:</label>
      <input onChange={handleChange} />

      <button onClick={handleClick}>Search!</button>

      {/* Weather results */}
      {weatherData && (
        <>
          <p>
            {weatherData.location?.name}'s temperature is{" "}
            {weatherData.current?.temp_c}°C
          </p>

          <p>It's {weatherData.current?.condition?.text}</p>

          <img src={weatherData.current?.condition?.icon} alt="" />
        </>
      )}
    </>
  );
}

export default App;
