// Individual components for each day in the 7-day Forecast
export default function DailyWeather({ day }) {
  const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dayNum = new Date(day.date).getDay();

  return (
    <li>
      <div className="flex items-center justify-between">
        <p>{daysOfWeek[dayNum]}</p>
        <div className="flex items-center">
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p>{day.day.condition.text}</p>
        </div>
        <p><strong>{Math.round(day.day.maxtemp_c)}</strong> / {Math.round(day.day.mintemp_c)}</p>
      </div>
    </li>
  );
}