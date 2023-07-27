import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import NavMenu from '../../components/NavMenu/NavMenu';
import City from '../../components/City/City';
import DailyForecast from '../../components/DailyForecast/DailyForecast';
import AirConditions from '../../components/AirConditions/AirConditions';
import WeeklyForecast from '../../components/WeeklyForecast/WeeklyForecast';

export default function WeatherPage({ user, setUser }) {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({});

  function chanceOfRain() {
    const currTime = new Date().toLocaleTimeString([], {hour12: false});
    const currDay = weatherData.forecast.forecastday[0]
    return currDay.hour[parseInt(currTime.slice(0, 2))].chance_of_rain
  }

  return (
    <main className="h-full grid grid-cols-custom grid-rows-1">
      <NavMenu user={user} setUser={setUser} />
      <section className='flex flex-col h-full'>
        {/* <span>Welcome, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</span> */}
        <div className='h-full flex flex-col gap-4'>
          <SearchBar location={location} setLocation={setLocation} setWeatherData={setWeatherData} />
          <City weatherData={weatherData} chanceOfRain={chanceOfRain} />
          <DailyForecast weatherData={weatherData} />
          <AirConditions weatherData={weatherData} chanceOfRain={chanceOfRain} />
        </div>
      </section>
      <WeeklyForecast />
    </main>
  );
}