import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ ready: false});
  const[city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
      });
    }
      
  function search() {
    const apiKey = "4b0a2657e2f51808d5d74848cae9b5e8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
              <input type="submit" value="Search" class="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
      </div>      
    );

  } else {
    search();
    return "Loading..."
  }
}