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
          This project was coded by Alex Fuentes with {" "}
          
          <a 
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SheCodes
          </a>
          , and it is {" "}
          <a
            href="https://github.com/alexpfuentes/react-weather-app"
            target="_blank" rel="noopener noreferrer"
          >
            open-sourced
          </a>
          {" "}on GitHub
        </footer>
      </div>
    </div>
  </div>
  );
}

export default App;
