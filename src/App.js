// src/App.js
import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";
import locations from "./locations.json";

function App() {
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle dropdown change
  const handleChange = (event) => {
    const selectedCity = event.target.value;
    const locationIndex = locations.findIndex(
      (loc) => loc.city.toLowerCase() === selectedCity.toLowerCase()
    );
    setSelectedLocationIndex(locationIndex);
  };

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to change the location every 15 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedLocationIndex(
        (prevIndex) => (prevIndex + 1) % locations.length
      );
    }, 15000); // This function uses milliseconds so 15000 == 15 seconds

    // Cleanup interval when dismounting
    return () => clearInterval(interval);
  }, []);

  // Filter locations based on the search query regardless of case
  const filteredLocations = locations.filter((loc) =>
    loc.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedLocation =
    filteredLocations[selectedLocationIndex % filteredLocations.length];

  return (
    <div className="App">
      <h1>Weather and Temperature App</h1>
      <input
        type="text"
        placeholder="Search for a city"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select onChange={handleChange} value={selectedLocation?.city || ""}>
        {filteredLocations.map((location) => (
          <option key={location.city} value={location.city}>
            {location.city}
          </option>
        ))}
      </select>
      {selectedLocation ? (
        <WeatherDisplay
          city={selectedLocation.city}
          temperature={selectedLocation.temperature}
          weather={selectedLocation.weather}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default App;
