import "./App.css";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(responce) {
    // console.log(responce.data);
    setWeatherData({
      ready: true,
      temperature: responce.data.temperature.current,
      feels_like: responce.data.temperature.feels_like,
      humidity: responce.data.temperature.humidity,
      city: responce.data.city,
      description: responce.data.condition.description,
      wind: responce.data.wind.speed,
      date: new Date(responce.data.time * 1000),
      icon: responce.data.condition.icon,
    });
  }

  function search() {
    const apiKey = `f1089ea2a06e9tf3co914bf9c65aa287`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
      <div className="App">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                className="form-control"
                placeholder="search city..."
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    );
  } else {
    search();
    return `Loading`;
  }
}
