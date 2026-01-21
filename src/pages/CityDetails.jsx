import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';
import { formatTemperature } from '../utils/temperatureUtils';
import { getCurrentWeather, getForecast, getWeatherIcon } from '../data/mockWeatherData';
import './CityDetails.css';

const CityDetails = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state) => state.settings.temperatureUnit);
  const favorites = useSelector((state) => state.favorites.cities);
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isFavorite = favorites.includes(cityName);

  const loadWeatherData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [current, forecastData] = await Promise.all([
        getCurrentWeather(cityName),
        getForecast(cityName),
      ]);
      setCurrentWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError('Nie udało się załadować danych pogodowych');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [cityName]);

  useEffect(() => {
    loadWeatherData();
  }, [loadWeatherData]);

  const handleFavoriteClick = useCallback(() => {
    dispatch(toggleFavorite(cityName));
  }, [dispatch, cityName]);

  const getDailyForecast = useCallback(() => {
    if (!forecast) return [];
    
    const daily = {};
    forecast.list.forEach(item => {
      const date = new Date(item.dt * 1000).toLocaleDateString('pl-PL');
      if (!daily[date]) {
        daily[date] = item;
      }
    });
    
    return Object.values(daily).slice(0, 5);
  }, [forecast]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Ładowanie szczegółów...</div>
      </div>
    );
  }

  if (error || !currentWeather) {
    return (
      <div className="container">
        <div className="error">{error || 'Nie znaleziono miasta'}</div>
        <button onClick={() => navigate('/')} className="back-button">
          Powrót do listy miast
        </button>
      </div>
    );
  }

  const dailyForecast = getDailyForecast();

  return (
    <div className="container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Powrót
      </button>
      
      <div className="city-details">
        <div className="details-header">
          <div>
            <h1>{currentWeather.name}, {currentWeather.sys.country}</h1>
            <p className="current-date">{new Date().toLocaleDateString('pl-PL', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
          <button 
            className={`favorite-btn-large ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            ★
          </button>
        </div>

        <div className="current-weather">
          <div className="large-icon">
            {getWeatherIcon(currentWeather.weather[0].icon)}
          </div>
          <div className="current-temp">
            {formatTemperature(currentWeather.main.temp, temperatureUnit)}
          </div>
          <div className="current-description">
            {currentWeather.weather[0].description}
          </div>
          <div className="feels-like">
            Odczuwalna: {formatTemperature(currentWeather.main.feels_like, temperatureUnit)}
          </div>
        </div>

        <div className="weather-details-grid">
          <div className="detail-card">
            <div className="detail-icon">💧</div>
            <div className="detail-label">Wilgotność</div>
            <div className="detail-value">{currentWeather.main.humidity}%</div>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">💨</div>
            <div className="detail-label">Wiatr</div>
            <div className="detail-value">{currentWeather.wind.speed} m/s</div>
            <div className="detail-sub">Kierunek: {currentWeather.wind.deg}°</div>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">🌡️</div>
            <div className="detail-label">Ciśnienie</div>
            <div className="detail-value">{currentWeather.main.pressure} hPa</div>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">☁️</div>
            <div className="detail-label">Zachmurzenie</div>
            <div className="detail-value">{currentWeather.clouds.all}%</div>
          </div>

          {currentWeather.rain && (
            <div className="detail-card">
              <div className="detail-icon">🌧️</div>
              <div className="detail-label">Opady (1h)</div>
              <div className="detail-value">{currentWeather.rain['1h'] || 0} mm</div>
            </div>
          )}

          <div className="detail-card">
            <div className="detail-icon">👁️</div>
            <div className="detail-label">Widoczność</div>
            <div className="detail-value">{(currentWeather.visibility / 1000).toFixed(1)} km</div>
          </div>
        </div>

        <h2 className="forecast-title">Prognoza na 5 dni</h2>
        <div className="forecast-grid">
          {dailyForecast.map((day, index) => (
            <div key={index} className="forecast-card">
              <div className="forecast-date">
                {new Date(day.dt * 1000).toLocaleDateString('pl-PL', { 
                  weekday: 'short', 
                  day: 'numeric', 
                  month: 'short' 
                })}
              </div>
              <div className="forecast-icon">
                {getWeatherIcon(day.weather[0].icon)}
              </div>
              <div className="forecast-temp">
                {formatTemperature(day.main.temp, temperatureUnit)}
              </div>
              <div className="forecast-description">
                {day.weather[0].description}
              </div>
              <div className="forecast-details">
                💧 {day.pop ? Math.round(day.pop * 100) : 0}%
              </div>
              {day.rain && (
                <div className="forecast-rain">
                  🌧️ {day.rain['3h'] || 0} mm
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
