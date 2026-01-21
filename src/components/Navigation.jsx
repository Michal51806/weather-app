import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTemperatureUnit } from '../store/settingsSlice';
import './Navigation.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const temperatureUnit = useSelector((state) => state.settings.temperatureUnit);

  const handleUnitChange = (e) => {
    dispatch(setTemperatureUnit(e.target.value));
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          🌤️ Weather App
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Wszystkie miasta
          </Link>
          <Link to="/favorites" className="nav-link">
            ⭐ Ulubione
          </Link>
          <select 
            value={temperatureUnit} 
            onChange={handleUnitChange}
            className="unit-selector"
          >
            <option value="celsius">°C</option>
            <option value="fahrenheit">°F</option>
            <option value="kelvin">K</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
