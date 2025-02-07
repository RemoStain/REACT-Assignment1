// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./WeatherDisplay.css";
import App from "./App";

// Get the root element from the index.html
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
