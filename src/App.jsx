import { useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [localDate, setLocalDate] = useState("");

  const getWeather = async () => {
    if (cityName.trim() === "") {
      alert("Invalid City Name");
      return;
    }
    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=046af07c64294701572e10ca4d58326f
`
      );
      const res = await resp.json();
      setWeatherData(res);

      const date = new Date(weatherData.dt);
      setLocalDate(date.toLocaleString());
      console.log(localDate);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <div className="p-2 md:p-4 flex flex-col justify-center items-center border-black border-2">
        <h1 className="justify-center">Current Weather</h1>
        <div
          className="m-2 p-2 border-2 border-black text-sm rounded-lg"
          id="searchBar"
        >
          <input
            type="text"
            className="p-2 focus:outline-none"
            placeholder="Virginia"
            onChange={(e) => setCityName(e.target.value)}
            required
          />
          <button className="" onClick={getWeather}>
            Search
          </button>
        </div>
        <div>
          {weatherData && (
            <div>
              <h1>{weatherData.name}</h1>
              <p>Temperature: {weatherData.main.temp} °F</p>
              <p>Feels Like: {weatherData.main.feels_like} °F</p>
              <p>Minimum: {weatherData.main.temp_min} °F</p>
              <p>Maximum: {weatherData.main.temp_max} °F</p>
              <p>Humidity: {weatherData.main.humidity} °F</p>
              <p>Wind Speed: {weatherData.wind.speed} °F</p>
              <p>Sky: {weatherData.weather[0].main}</p>
              <p>Date: {localDate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
