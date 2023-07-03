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

  function load() {
    let apiKey = "4c3ab30f0419b703b56ofe9631t0a52a";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
    
    axios.get(apiUrl).then(handleResponse);
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
          } else {
            return null;
          }
        })}
      </div>   
    );
  } else {
      load();
      return null;
    }
}
