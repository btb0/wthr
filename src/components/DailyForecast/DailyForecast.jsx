import HourlyWeather from "../HourlyWeather/HourlyWeather";

// Shown as Today's Forecast on WeatherPage
export default function DailyForecast({ weatherData }) {
  if (!weatherData.location) return null;

  const today = weatherData.forecast.forecastday[0];
  const hourlyWeather = today.hour.map(hour => (
    <HourlyWeather hour={hour} key={hour.time_epoch}/>
  ));

  return (
    <section className="bg-componentDark rounded-3xl flex flex-col p-6 h-1/3">
      <h2 className="mb-3">Today's Forecast</h2>
      <div className="flex">
        {hourlyWeather}
      </div>
    </section>
  );
}