import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavMenu from '../../components/NavMenu/NavMenu';
import City from '../../components/City/City';
import DailyForecast from '../../components/DailyForecast/DailyForecast';

export default function WeatherPage({ user, setUser }) {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  return (
    <main className="h-full">
      <NavMenu user={user} setUser={setUser} />
      <SearchBar location={location} setLocation={setLocation} setWeatherData={setWeatherData} />
      <span>Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</span>
      <City weatherData={weatherData} />
      <DailyForecast weatherData={weatherData} />
    </main>
  );
}