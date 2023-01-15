import "./App.css";
import Form from "./Form";
import axios from "axios";
import React, { useState } from "react";
import FriendlyDate from "./FriendlyDate";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(responce) {
    console.log(responce.data);

    setWeatherData({
      ready: true,
      temperature: responce.data.temperature.current,
      feels_like: responce.data.temperature.feels_like,
      humidity: responce.data.temperature.humidity,
      city: responce.data.city,
      description: responce.data.condition.description,
      wind: responce.data.wind.speed,
      date: new Date(responce.data.time * 1000),
      icon: responce.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <Form />
        <h1>{weatherData.city}</h1>
        <h5>
          <FriendlyDate date={weatherData.date} />
        </h5>
        <h6 className="text-capitalize">{weatherData.description} </h6>
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <img src={weatherData.icon} alt="sunny"></img>
              <span className="temp">
                {Math.round(weatherData.temperature)} °C
              </span>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/h</li>
                <li>Feels like: {Math.round(weatherData.feels_like)}°C</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer">
          <a
            href="https://github.com/plnvsln/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-sourced{" "}
          </a>
          by Polina Chernii
        </div>
      </div>
    );
  } else {
    const apiKey = `f1089ea2a06e9tf3co914bf9c65aa287`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query={London}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return `Loading`;
  }
}
