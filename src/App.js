import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Form />
      <h1>New York</h1>
      <ul>
        <li>Last updated: Tuesday 10:00</li>
        <li>Cloudy</li>
        <li>Humidity: 80%</li>
        <li>Wind: 10 km/h</li>
      </ul>

      <div className="temp">15</div>
    </div>
  );
}

export default App;
