const GEO = "https://geocoding-api.open-meteo.com/v1/search";
const WX = "https://api.open-meteo.com/v1/forecast";

// Fetch JSON and check the HTTP response
async function getJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error("Too many requests. Please try again later.");
    }

    throw new Error(
      "The weather service is unavailable. Please try again."
    );
  }

  const data = await response.json();
  return data;
}

// Find the city, then fetch its current weather
export async function loadWeather(city) {
  const cityParams = new URLSearchParams({
    name: city,
    count: 1,
    language: "en"
  });

  const geo = await getJSON(`${GEO}?${cityParams}`);

  if (!geo.results || geo.results.length === 0) {
    throw new Error("City not found. Please check the city name.");
  }

  const location = geo.results[0];

  const weatherParams = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current:
      "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day",
    timezone: "auto"
  });

  const weather = await getJSON(`${WX}?${weatherParams}`);

  return {
    location: location,
    current: weather.current
  };
}