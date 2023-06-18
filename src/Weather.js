import React from "react";

export default function Weather() {
  return (
    <div>
      <div class="overview">
        <h1 id="city">Kyle</h1>
        <ul>
          <li>
            last updated:
            <span id="date">05/29/2023</span>
          </li>
          <li class="description" id="description">
            Cloudy
          </li>
        </ul>
      </div>

      <div class="row">
        <div class="col-6">
          <img src="" alt="" id="icon" class="big-icon" />
        </div>

        <div class="col-6">
          <div class="d-flex weather-temperature">
            <div>
              <strong id="temperature">78</strong>
              <span class="unit">°F</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}