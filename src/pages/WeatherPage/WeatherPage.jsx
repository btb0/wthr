import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavMenu from '../../components/NavMenu/NavMenu';
import City from '../../components/City/City';
import DailyForecast from '../../components/DailyForecast/DailyForecast';
import AirConditions from '../../components/AirConditions/AirConditions';

export default function WeatherPage({ user, setUser }) {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  function chanceOfRain() {
    const currTime = new Date().toLocaleTimeString([], {hour12: false});
    const currDay = weatherData.forecast.forecastday[0]
    return currDay.hour[parseInt(currTime.slice(0, 2))].chance_of_rain
  }

  return (
    <main className="h-full">
      <NavMenu user={user} setUser={setUser} />
      <SearchBar location={location} setLocation={setLocation} setWeatherData={setWeatherData} />
      <span>Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</span>
      <City weatherData={weatherData} chanceOfRain={chanceOfRain} />
      <div className='flex flex-col w-7/12'>
        <DailyForecast weatherData={weatherData} />
        <AirConditions weatherData={weatherData} chanceOfRain={chanceOfRain} />
      </div>
    </main>
  );
}