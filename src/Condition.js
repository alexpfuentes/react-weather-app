import React from "react";

export default function Condition() {
  return (
    <div class="condition">
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            🌡️ Feels Like:
            <span id="feels-like"></span>°
          </div>

          <div class="col">
            💧Humidity:
            <span id="humidity"></span>%
          </div>

          <div class="col">
            🍃Wind:
            <span id="wind"></span>
            m/H
          </div>
        </div>
      </div>
    </div>
  );
}