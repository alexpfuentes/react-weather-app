import React, {useState} from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
      setWeatherData({
        ready: true,
        city: response.data.name,
        date: "Sunday 6/25/2023",
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        feels_like: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed
      });
    }

  if (weatherData.ready) {
    return (
      <div> 
        <div className="grid-two-columns">
  
          <section>
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  {weatherData.date}
                </li>
                <li className="description text-capitalize">
                  {weatherData.description}
                </li>
              </ul>
            </div>
  
            <div>
              <div className="weather-temperature">
                <div>
                    <strong id="temperature">{Math.round(weatherData.temperature)}</strong>
                    <span className="unit">°F</span>
                  </div>
                </div>
              </div>
          </section>
  
          <section>
            <div className="icon">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="goldenrod"
              size={150}
              animate={true}
            />
            </div>
          </section>
  
        </div>

        <div className="condition">
          <div>
            🌡️ Feels Like: {Math.round(weatherData.feels_like)}°
          </div>

          <div>
            💧Humidity: {weatherData.humidity}%
          </div>

          <div>
            🍃Wind: {Math.round(weatherData.wind)}m/H
          </div>
        </div>

      </div>
        );
  } else {
    const apiKey = "4b0a2657e2f51808d5d74848cae9b5e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}