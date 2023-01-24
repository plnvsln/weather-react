import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);
  function handleResponse(response) {
    // console.log(response.data);
  }

  let apiKey = "f1089ea2a06e9tf3co914bf9c65aa287";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          THU
          <div className="forecast-icon">
            <WeatherIcon code="clear-sky-day" size={40} />
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max"> 17</span>
            <span className="forecast-temp-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
