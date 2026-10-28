// Convert the weather code into a description and an icon
function getWeatherInfo(code, isDay) {
  if (code === 0) {
    if (isDay === 0) {
      return { description: "Clear night", icon: "☾" };
    }

    return { description: "Clear sky", icon: "☀" };
  }

  if (code === 1 || code === 2) {
    return { description: "Partly cloudy", icon: "⛅" };
  }

  if (code === 3) {
    return { description: "Overcast", icon: "☁" };
  }

  if (code === 45 || code === 48) {
    return { description: "Foggy", icon: "≋" };
  }

  if (code === 51 || code === 53 || code === 55) {
    return { description: "Drizzle", icon: "☂" };
  }

  if (code === 56 || code === 57) {
    return { description: "Freezing drizzle", icon: "☂" };
  }

  if (code === 61 || code === 63 || code === 65) {
    return { description: "Rainy", icon: "☂" };
  }

  if (code === 66 || code === 67) {
    return { description: "Freezing rain", icon: "☂" };
  }

  if (code === 71 || code === 73 || code === 75 || code === 77) {
    return { description: "Snowy", icon: "❄" };
  }

  if (code === 80 || code === 81 || code === 82) {
    return { description: "Rain showers", icon: "☂" };
  }

  if (code === 85 || code === 86) {
    return { description: "Snow showers", icon: "❄" };
  }

  if (code === 95) {
    return { description: "Thunderstorm", icon: "ϟ" };
  }

  if (code === 96 || code === 99) {
    return { description: "Thunderstorm with hail", icon: "ϟ" };
  }

  return {
    description: "Weather condition unavailable",
    icon: "☁"
  };
}

export default function WeatherCard({ data }) {
  const current = data.current;
  const location = data.location;
  const info = getWeatherInfo(current.weather_code, current.is_day);

  return (
    <section className="weather-card">
      <div className="weather-heading">
        <div>
          <p className="section-label">CURRENT WEATHER</p>
          <h2 id="city-name">{location.name}</h2>
          <p id="country-name">{location.country || ""}</p>
        </div>

        <span id="weather-icon" aria-hidden="true">
          {info.icon}
        </span>
      </div>

      <p className="temperature">
        {current.temperature_2m} °C
      </p>

      <p id="description">{info.description}</p>

      <div className="weather-details">
        <div className="detail">
          <h3>Feels like</h3>
          <p>{current.apparent_temperature} °C</p>
        </div>

        <div className="detail">
          <h3>Humidity</h3>
          <p>{current.relative_humidity_2m} %</p>
        </div>

        <div className="detail">
          <h3>Wind speed</h3>
          <p>{current.wind_speed_10m} km/h</p>
        </div>
      </div>
    </section>
  );
}