export default function City({weatherData}) {
  if (!weatherData.location) return null;

  function chanceOfRain() {
    const currTime = new Date().toLocaleTimeString([], {hour12: false});
    const currDay = weatherData.forecast.forecastday[0]
    return currDay.hour[parseInt(currTime.slice(0, 2))].chance_of_rain
  }

  return (
    <section>
      <h1 className="text-blue-200">{weatherData.location.name}</h1>
      <h3 className="text-blue-200">Chance of rain: {chanceOfRain()}%</h3>
      <h2 className="text-blue-200" >{Math.round(weatherData.current.temp_c)}&deg;</h2>
    </section>
  );
}