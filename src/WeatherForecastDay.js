import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      {day()}
      <div className="forecast-icon">
        <WeatherIcon code={props.data.condition.icon} size={40} />
      </div>
      <div className="forecast-temp">
        <span className="forecast-temp-max">{maxTemp()} </span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
