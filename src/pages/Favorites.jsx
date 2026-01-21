import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import CityCard from '../components/CityCard';
import { getCurrentWeather } from '../data/mockWeatherData';
import './Home.css';

const Favorites = () => {
  const favoriteCities = useSelector((state) => state.favorites.cities);
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadFavorites = useCallback(async () => {
    if (favoriteCities.length === 0) {
      setWeatherData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const weatherPromises = favoriteCities.map(city => getCurrentWeather(city));
      const data = await Promise.all(weatherPromises);
      setWeatherData(data.filter(d => d !== null));
    } catch (err) {
      console.error('Error loading favorites:', err);
    } finally {
      setLoading(false);
    }
  }, [favoriteCities]);

  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const cityCards = useMemo(() => 
    weatherData.map(city => (
      <CityCard key={city.id} weather={city} />
    )),
    [weatherData]
  );

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Ładowanie ulubionych miast...</div>
      </div>
    );
  }

  if (favoriteCities.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">Ulubione miasta</h1>
        <div className="loading">
          Nie masz jeszcze żadnych ulubionych miast. <br />
          Dodaj je klikając gwiazdkę przy mieście! ⭐
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Ulubione miasta ⭐</h1>
      <div className="city-grid">
        {cityCards}
      </div>
    </div>
  );
};

export default Favorites;
