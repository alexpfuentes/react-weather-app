import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";


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

      <div>
        <div className="weather-temperature">
          <div>
              <strong id="temperature">{Math.round(props.data.temperature)}</strong>
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