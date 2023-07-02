import React from "react";

export default function WeatherTEmperature(props) {
  return (
    <div className="weather-temperature">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">
        °F
      </span>
    </div>
  );
}
