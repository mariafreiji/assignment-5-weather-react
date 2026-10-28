import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import WeatherCard from "./components/WeatherCard.jsx";
import { loadWeather } from "./api.js";

export default function App() {
  const [request, setRequest] = useState(null);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleSearch(cityName) {
    setStatus("loading");
    setError("");
    setData(null);
    setRequest({ city: cityName });
  }

  function handleRetry() {
    if (request !== null) {
      handleSearch(request.city);
    }
  }

  useEffect(() => {
    if (request === null) {
      return;
    }

    let active = true;

    async function fetchWeather() {
      try {
        const result = await loadWeather(request.city);

        if (active) {
          setData(result);
          setStatus("ready");
        }
      } catch (error) {
        if (active) {
          if (error instanceof TypeError) {
            setError(
              "Unable to connect. Check your internet connection and try again."
            );
          } else {
            setError(error.message);
          }

          setStatus("error");
        }
      }
    }

    fetchWeather();

    return () => {
      active = false;
    };
  }, [request]);

  return (
    <main className="dashboard">
      <Header />

      <SearchBar
        onSearch={handleSearch}
        loading={status === "loading"}
      />

      {status === "loading" && <LoadingSpinner />}

      {status === "error" && (
        <ErrorMessage
          message={error}
          onRetry={handleRetry}
        />
      )}

      {status === "ready" && data !== null && (
        <WeatherCard data={data} />
      )}

      <footer>
        <p>Weather data from Open-Meteo</p>
      </footer>
    </main>
  );
}