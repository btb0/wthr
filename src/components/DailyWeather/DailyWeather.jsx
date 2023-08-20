// Individual components for each day in the 7-day Forecast
export default function DailyWeather({ day, idx }) {
  const daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const dayNum = new Date(day.date).getDay();

  return (
    <li className={`${idx !== 0 ? 'border-t border-compBorderDark' : ''} flex-grow`}>
      <div className="flex items-center justify-between h-full p-4">
        <p className="text-darkGreyText">{daysOfWeek[dayNum]}</p>
        <div className="flex items-center">
          <img src={day.day.condition.icon} alt={day.day.condition.text} />
          <p className="text-greyText">{day.day.condition.text}</p>
        </div>
        <p className="text-darkGreyText">
          <strong className="text-greyText">{Math.round(day.day.maxtemp_c)}</strong> / {Math.round(day.day.mintemp_c)}
        </p>
      </div>
    </li>
  );
}