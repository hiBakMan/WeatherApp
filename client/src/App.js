import { getLocations, getWeather, getForecasts } from "./auxiliary/apirequests";
import { postQuery, postWeather } from "./auxiliary/backendrequests";
import ErrorBox from './components/ErrorBox';
import SearchBox from "./components/SearchBox";
import Locations from "./components/Locations";
import CurrentWeather from "./components/CurrentWeather";
import Forecasts from "./components/Forecasts";
import BackButton from "./components/BackButton";
import React, { useState } from "react";


const App = () => {

  const [query, setQuery] = useState('');
  const [error, setError] = useState();
  const [locations, setLocations] = useState();
  const [location, setLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState('');
  const [forecasts, setForecasts] = useState();

  return (
    <div className="App">
      <main className="container">
        <SearchBox 
        query={query}
        setQuery={setQuery}
        setError={setError}
        setLocations={setLocations}
        getLocations={getLocations}
        setCurrentWeather={setCurrentWeather}
        postQuery={postQuery}
        />
        {(typeof error != "undefined") ? (
        <ErrorBox
        error={error}
        />  
        ) : ('')}
        {(typeof locations != "undefined") ?
         ((currentWeather !== "") ? 
         (
        <div className="weather-box">
          <CurrentWeather
          currentWeather={currentWeather}
          location={location}
          />
          {(typeof forecasts != "undefined") ? 
          <Forecasts 
          forecasts={forecasts}
          />
          : ('')}
          <BackButton
          setCurrentWeather={setCurrentWeather}
          />
        </div>
         ) : (
        <Locations 
        locations={locations}
        getWeather={getWeather}
        setCurrentWeather={setCurrentWeather}
        setForecasts={setForecasts}
        getForecasts={getForecasts}
        postWeather={postWeather}
        setLocation={setLocation}
        />
        )) : ("")}
      </main>
    </div>
  );
}

export default App;
