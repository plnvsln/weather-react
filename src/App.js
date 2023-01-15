import "./App.css";
import Form from "./Form";
import axios from "axios";
import React, { useState } from "react";

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
      date: `Tuesday 10:00`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <Form />
        <h1>{weatherData.city}</h1>
        <h5>{weatherData.date}</h5>
        <h6 className="text-capitalize">{weatherData.description} </h6>
        <div className="container">
          <div className="row">
            <div className="col-6">
              {" "}
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="sunny"
              ></img>
              <div className="temp">
                {Math.round(weatherData.temperature)} °C
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} m/h</li>
                <li>Feels like: {Math.round(weatherData.feels_like)} °C</li>
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
