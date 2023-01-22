import React from "react";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h5>
        <FriendlyDate date={props.data.date} />
      </h5>
      <h6 className="text-capitalize">{props.data.description} </h6>
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemp celsius={props.data.temperature} />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} m/h</li>
              <li>Feels like: {Math.round(props.data.feels_like)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
