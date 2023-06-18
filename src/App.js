import Search from "./Search";
import Weather from "./Weather";
import Condition from "./Condition";
import Forecast from "./Forecast";

import './App.css';


function App() {
  return (
    <div className="App">
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div>
            <Search />
            <Weather />
            <Condition />
            <Forecast />
          </div>
        </div>

        <small>
          <a
            href="https://github.com/alexpfuentes/Alex-Weather-App"
            target="_blank"
          >
            Open-source code
          </a>
          , by Alex Fuentes
        </small>
      </div>
    </div>
  </div>
  );
}

export default App;
