import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          THU
          <div className="forecast-icon">
            <WeatherIcon code="clear-sky-day" size={40} />
          </div>
          <div className="forecast-temp">
            <span className="forecast-temp-max"> 19</span>
            <span className="forecast-temp-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
