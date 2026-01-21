import { useState, useEffect, useCallback, useMemo } from 'react';
import CityCard from '../components/CityCard';
import { getCurrentWeather, DEFAULT_CITIES } from '../data/mockWeatherData';
import './Home.css';

const Home = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCities = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const weatherPromises = DEFAULT_CITIES.map(city => getCurrentWeather(city));
      const weatherData = await Promise.all(weatherPromises);
      setCities(weatherData);
    } catch (err) {
      setError('Nie udało się załadować danych pogodowych');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCities();
  }, [loadCities]);

  const cityCards = useMemo(() =>
    cities.map(city => (
      <CityCard key={city.id} weather={city} />
    )),
    [cities]
  );

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Ładowanie danych pogodowych...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">{error}</div>
        <button onClick={loadCities} className="retry-button">
          Spróbuj ponownie
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Prognoza pogody</h1>
      <div className="city-grid">
        {cityCards}
      </div>
    </div>
  );
};

export default Home;
