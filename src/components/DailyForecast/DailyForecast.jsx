import HourlyWeather from "../HourlyWeather/HourlyWeather";

export default function DailyForecast({ weatherData }) {
  if (!weatherData.location) return null;

  const today = weatherData.forecast.forecastday[0];
  const hourlyWeather = today.hour.map((hour, idx) => (
    <HourlyWeather hour={hour} key={idx}/>
  ));

  return (
    <section className="bg-componentDark rounded-xl flex flex-col p-6 mb-4">
      <h2 className="mb-3">Today's Forecast</h2>
      <div className="flex">
        {hourlyWeather}
      </div>
    </section>
  );
}