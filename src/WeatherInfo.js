import React from "react";
import FriendlyDate from "./FriendlyDate";

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
            <img src={props.data.icon} alt="sunny"></img>
            <span className="temp">
              {Math.round(props.data.temperature)} °C
            </span>
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
}
