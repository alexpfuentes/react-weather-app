import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props) {
return (
  <div className="weatherInfo"> 
  <div className="grid-two-columns">

    <section>
      <div className="overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
          <FormattedDate date={props.data.date} />
          </li>
          <li className="description text-capitalize">
            {props.data.description}
          </li>
        </ul>
      </div>
        <WeatherTemperature fahrenheit={props.data.temperature}/>
    </section>

    <section>
      <div className="mt-3">
        <img 
          src={props.data.iconUrl}
          alt={props.data.description}
          className="icon" />
      </div>
    </section>

  </div>

  <div className="condition">
    <div>
      🌡️ Feels Like: {Math.round(props.data.feels_like)}°
    </div>

    <div>
      💧Humidity: {props.data.humidity}%
    </div>

    <div>
      🍃Wind: {Math.round(props.data.wind)}m/H
    </div>
  </div>

  </div>
  );
}