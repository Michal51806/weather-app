import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import CityDetails from './pages/CityDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/city/:cityName" element={<CityDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
