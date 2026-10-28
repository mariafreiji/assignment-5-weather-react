# SunnyRainy — React Weather Dashboard

Assignment 5: React Multi-Component Application.

A weather dashboard built with React and Vite.
Search for a city to view its current weather.

## Features

- City search with input validation
- Current temperature, weather description and icon
- Feels-like temperature, humidity and wind speed
- Loading message while fetching data
- Error messages and a retry button
- Responsive layout for desktop and mobile

## Requirements

- Node.js and npm
- An internet connection to fetch weather data

## Installation and development server

1. Clone the repository or download and extract the ZIP.
2. Open a terminal in the project folder containing package.json.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL displayed in the terminal.

If PowerShell blocks npm.ps1 on Windows, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Build and code checks

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

## Project structure

- src/App.jsx: shared state, data fetching and conditional rendering
- src/api.js: API requests and HTTP error handling
- src/index.css: application styles and responsive layout
- src/components/Header.jsx: application heading
- src/components/SearchBar.jsx: controlled input and validation
- src/components/LoadingSpinner.jsx: loading message
- src/components/ErrorMessage.jsx: error message and retry button
- src/components/WeatherCard.jsx: current weather display

## React concepts

All components are functional components, each in its own file.

SearchBar uses useState for the input and validation message.
App uses useState for the submitted request, weather data,
request status and API error message.

App passes data and callback functions directly to its children
through props. Shared state stays in App, the common parent.
Props travel only one component level, so Context is not needed.

A useEffect in App fetches weather whenever the request changes.
A new request object allows repeated searches for the same city.
The cleanup function prevents outdated responses from updating
the displayed result.

Conditional rendering displays loading, error or success states.

## Weather API

Weather data is provided by Open-Meteo.

- The geocoding API finds the city's coordinates.
- The forecast API retrieves the current weather.

No API key is required.

## Technologies

React, Vite, JavaScript, JSX and CSS.

## Submission

The project ZIP excludes node_modules.
Dependencies are restored by running npm install.