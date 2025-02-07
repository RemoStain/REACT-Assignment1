// src/components/WeatherDisplay.js
import React from "react";
import "../WeatherDisplay.css";

function WeatherDisplay({ city, temperature, weather }) {
  return (
    <div className="weather-display">
      <h2>{city}</h2>
      <p>Temperature: {temperature}</p>
      <p>Weather: {weather}</p>
    </div>
  );
}

export default WeatherDisplay;
