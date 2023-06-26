import Search from "./WeatherInfo";
import Weather from "./Weather";
import Forecast from "./Forecast";

import './App.css';


function App() {
  return (
    <div className="App">
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div>
            <Weather defaultCity="Austin" />
          </div>
        </div>

        <footer className="mt-3">
          <a
            href="https://github.com/alexpfuentes/react-weather-app"
            target="_blank" rel="noreferrer"
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
