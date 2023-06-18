import React from "react";

export default function Condition() {
  return (
    <div class="condition grid-three-columns">

          <div>
            🌡️ Feels Like:
            <span id="feels-like"></span>°
          </div>

          <div>
            💧Humidity:
            <span id="humidity"></span>%
          </div>

          <div>
            🍃Wind:
            <span id="wind"></span>
            m/H
          </div>

    </div>
  );
}