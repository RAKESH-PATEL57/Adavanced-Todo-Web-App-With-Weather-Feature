import React, { useEffect, useState } from 'react';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('New York');
  const [position, setPosition] = useState(null);

  // Use a direct API key here - in production, you would store this in a .env file
  // You should get your own API key from https://openweathermap.org/
  const API_KEY = import.meta.env.VITE_API_KEY; // This is a sample key, replace with your own
  console.log(API_KEY);
  useEffect(() => {
    // Get user's location if available
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (err) => {
          console.error("Error getting location:", err);
          // If location access is denied, fall back to default city
          fetchWeatherByCity(city);
        }
      );
    } else {
      // Geolocation not supported, fall back to default city
      fetchWeatherByCity(city);
    }
  }, []);

  useEffect(() => {
    // When position changes, fetch weather by coordinates
    if (position) {
      fetchWeatherByCoords(position.lat, position.lon);
    }
  }, [position]);

  const fetchWeatherByCity = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`Weather data not available (${response.status})`);
      }
      
      const data = await response.json();
      setWeather(data);
      setCity(data.name); // Update city name from response
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Weather API error:", error);
      setError('Failed to load weather data. Please try another city.');
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error(`Weather data not available (${response.status})`);
      }
      
      const data = await response.json();
      setWeather(data);
      setCity(data.name); // Update city name from response
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Weather API error:", error);
      setError('Failed to load weather data for your location.');
      setLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeatherByCity(city);
  };

  return (
    <div className="card weather-widget">
      <div className="card-body">
        <h6 className="card-title">Weather for Outdoor Activity</h6>
        
        <form onSubmit={handleSearch} className="mb-3">
          <div className="input-group input-group-sm">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={handleCityChange}
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </div>
        </form>
        
        {loading ? (
          <div className="text-center py-3">
            <div className="spinner-border spinner-border-sm spinner-border-neon" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="mt-2">Loading weather data...</div>
          </div>
        ) : error ? (
          <div className="alert alert-danger py-2">{error}</div>
        ) : weather ? (
          <div className="d-flex align-items-center">
            <div>
              <div className="fs-5">{weather.name}</div>
              <div>{Math.round(weather.main.temp)}°C</div>
              <div className="text-capitalize">{weather.weather[0].description}</div>
              <div className="small mt-1">
                <span>Humidity: {weather.main.humidity}%</span> | 
                <span> Wind: {Math.round(weather.wind.speed)} m/s</span>
              </div>
            </div>
            <div className="ms-auto">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                width="65"
              />
            </div>
          </div>
        ) : (
          <div className="alert alert-info py-2">No weather data available</div>
        )}
      </div>
    </div>
  );
}

export default Weather;