import "./App.css";
import Form from "./Form";
import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";

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
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = `f1089ea2a06e9tf3co914bf9c65aa287`;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query={London}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return `Loading`;
  }
}
