import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function showF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showC(event) {
    event.preventdefult();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temp">{Math.round(props.celsius)} </span>
        <span className="unit">
          {" "}
          °C | °{" "}
          <a href="/" onClick={showF}>
            {" "}
            F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temp">{Math.round(fahrenheit)} </span>
        <span className="unit">
          <a href="/" onClick={showC}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
