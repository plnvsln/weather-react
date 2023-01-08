import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Form />
        <h1>New York</h1>
        <ul>
          <li>Cloudy</li>
          <li>Humidity: 80%</li>
          <li>Wind: 10 km/h</li>
        </ul>
        <small>Last updated: Tuesday 10:00</small>
        <div className="temp">15°C</div>
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

export default App;
