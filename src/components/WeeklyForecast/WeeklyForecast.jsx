import DailyWeather from '../DailyWeather/DailyWeather';

export default function WeeklyForecast({ weatherData }) {
  if (!weatherData.forecast) return null;

  const dailyWeather = weatherData.forecast?.forecastday.map(day => (
    <DailyWeather day={day} key={day.date_epoch} />
  ));
  return (
    <section className="bg-componentDark rounded-3xl ml-6 mt-16 flex w-1/2 flex-col p-9 max-w-lg">
      <h2 className="mb-3">7-Day Forecast</h2>
      <ul className='h-full flex flex-col justify-between'>
        {dailyWeather}
      </ul>
    </section>
  );
}