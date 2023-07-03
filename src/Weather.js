import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false });
  const[city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      feels_like: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      icon: response.data.condition.icon
      });
    }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }  

  function search() {
    const apiKey = "4c3ab30f0419b703b56ofe9631t0a52a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="search">
        <form className="mb-3" onSubmit={handleSubmit} >
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input 
                type="submit" 
                value="Search" 
                class="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates}/>
      </div>      
    );
  } else {
    search();
    return "Loading..."
  }
}