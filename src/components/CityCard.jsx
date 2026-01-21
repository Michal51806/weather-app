import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/favoritesSlice';
import { formatTemperature } from '../utils/temperatureUtils';
import { getWeatherIcon } from '../data/mockWeatherData';
import './CityCard.css';

const CityCard = ({ weather }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state) => state.settings.temperatureUnit);
  const favorites = useSelector((state) => state.favorites.cities);
  
  const isFavorite = favorites.includes(weather.name);

  const handleClick = useCallback(() => {
    navigate(`/city/${weather.name}`);
  }, [navigate, weather.name]);

  const handleFavoriteClick = useCallback((e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(weather.name));
  }, [dispatch, weather.name]);

  return (
    <div className="city-card" onClick={handleClick}>
      <button 
        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
        onClick={handleFavoriteClick}
        aria-label="Toggle favorite"
      >
        ★
      </button>
      <h2>{weather.name}</h2>
      <div className="weather-icon">
        {getWeatherIcon(weather.weather[0].icon)}
      </div>
      <div className="temperature">
        {formatTemperature(weather.main.temp, temperatureUnit)}
      </div>
      <div className="description">{weather.weather[0].description}</div>
      <div className="details">
        <span>💧 {weather.main.humidity}%</span>
        <span>💨 {weather.wind.speed} m/s</span>
      </div>
    </div>
  );
};

export default CityCard;
