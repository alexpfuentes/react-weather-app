import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div> 

      <div class="grid-two-columns">

        <section>
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

          <div>
            <div class="weather-temperature">
              <div>
                  <strong id="temperature">78</strong>
                  <span class="unit">°F</span>
                </div>
              </div>
            </div>
        </section>

        <section>
          <div>
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={150}
            animate={true}
          />
          </div>
        </section>
      </div>

    </div>
  );
}