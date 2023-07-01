import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="WeatherForecast-day">
        {forecast[0].dt}
        <WeatherIcon code={forecast[0].weather[0].icon} size={36} />
          <div className="WeatherForecast-temperature-max">
            {Math.round(forecast[0].temp.max)}°
          </div>
          <div className="WeatherForecast-temperature-min">
            {Math.round(forecast[0].temp.min)}°
          </div>
        </div>
      </div>   
    );

   
    } else {
    let apiKey = "4b0a2657e2f51808d5d74848cae9b5e8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
