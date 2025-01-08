import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, sys } = weatherData || {};
  const { temp, feels_like, humidity, pressure } = main || {};
  const weatherIcon = weather?.[0]?.icon;

  return (
    <div className="weather-card">
      <h2>
        {name}, {sys?.country}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="Weather Icon"
      />
      <h3>{weather?.[0]?.description}</h3>
      <p className="temp">{Math.round(temp)}°C</p>
      <div className="details">
        <p>
          <strong>Feels Like:</strong> {Math.round(feels_like)}°C
        </p>
        <p>
          <strong>Humidity:</strong> {humidity}%
        </p>
        <p>
          <strong>Pressure:</strong> {pressure} hPa
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;



