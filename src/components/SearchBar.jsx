import React, { useState, useRef } from "react";
import { fetchWeatherData } from "../services/WeatherApi";
import WeatherCard from "./WeatherCard";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(""); // Error message state
  const inputRef = useRef();

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Please enter a valid city name.");
      setWeather(null);
      return;
    }

    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(""); // Clear previous errors
      inputRef.current.value = ""; // Clear the input field
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="search-container">
      <div className="search">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weather && <WeatherCard weatherData={weather} />}
    </div>
  );
};

export default SearchBar;


