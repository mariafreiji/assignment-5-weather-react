import { useState } from "react";

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (loading) {
      return;
    }

    const city = query.trim();

    if (city === "") {
      setError("Please enter a city name.");
      return;
    }

    setError("");
    onSearch(city);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="city-input">City name</label>

      <div className="search-row">
        <input
          type="text"
          id="city-input"
          placeholder="For example: Beirut"
          value={query}
          onChange={handleChange}
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          Search
        </button>
      </div>

      {error !== "" && <p role="alert">{error}</p>}
    </form>
  );
}