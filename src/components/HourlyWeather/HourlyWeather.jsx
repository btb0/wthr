export default function HourlyWeather({ hour }) {
  return (
    <div>
      <p>{hour.time.slice(-5)}</p>
      <img src={hour.condition.icon} alt="temp" />
      <p>{hour.temp_c}&deg;</p>
    </div>
  );
}