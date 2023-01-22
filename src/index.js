import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App defaultCity="London" />
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
