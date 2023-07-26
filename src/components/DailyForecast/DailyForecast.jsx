import HourlyWeather from "../HourlyWeather/HourlyWeather";

export default function DailyForecast({ weatherData }) {
  const today = weatherData.forecast.forecastday[0];
  const hourlyWeather = today.hour.map((hour, idx) => (
    <HourlyWeather hour={hour} key={idx}/>
  ));

  return (
    <section className="bg-componentDark rounded-xl flex flex-col w-7/12 p-6 h-1/4">
      <h2 className="mb-3">Today's Forecast</h2>
      <div className="flex">
        {hourlyWeather}
      </div>
    </section>
  );
}