import React from "react";
import Weather from "./Weather";

import './App.css';


function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <div>
            <Weather defaultCity="Austin" />
          </div>
        </div>

        <footer className="mt-3">
          <a
            href="https://github.com/alexpfuentes/react-weather-app"
            target="_blank" rel="noopener noreferrer"
          >
            Open-source code
          </a>
          , by Alex Fuentes
        </footer>
      </div>
    </div>
  </div>
  );
}

export default App;
