export default function AirConditions({ weatherData, chanceOfRain }) {
  if (!weatherData.location) return null;

  return (
    <section className="bg-componentDark rounded-3xl flex flex-col p-6 h-1/3">
      <div className="flex justify-between">
        <h2 className="mb-3">Air Conditions</h2>
        <button className="rounded-full bg-blue-600">See more</button>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 h-full">
        <div className="h-1/2">
          <p>feels like</p>
          <p>{weatherData.current.feelslike_c}&deg;</p>
        </div>
        <div className="h-1/2">
          <p>wind</p>
          <p>{weatherData.current.wind_kph} km/h</p>
        </div>
        <div className="h-1/2">
          <p>chance of rain</p>
          <p>{chanceOfRain()}%</p>
        </div>
        <div className="h-1/2">
          <p>UV index: {weatherData.current.uv}</p>
          <p>{weatherData.current.uv}</p>
        </div>
      </div>
    </section>
  );
}