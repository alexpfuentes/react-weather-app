import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        {forecast.map(function (dailyForecast, index){
          if (index < 6) {
            return (
              <div key={index}>
                <ForecastDay data={dailyForecast}/>
              </div>
            );
          }
        })}
      </div>   
    );
  } else {
      let apiKey = "4b0a2657e2f51808d5d74848cae9b5e8";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
      axios.get(apiUrl).then(handleResponse);
      return null;
    }
}
