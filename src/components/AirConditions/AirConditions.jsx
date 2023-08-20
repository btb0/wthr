// Air conditions component on WeatherPage
export default function AirConditions({ weatherData, chanceOfRain }) {
  if (!weatherData.location) return null;

  return (
    <section className="bg-componentDark rounded-3xl flex flex-col p-6 h-1/3">
      <div className="flex justify-between">
        <h2 className="mb-3 text-darkGreyText">Air Conditions</h2>
        <button className="rounded-full bg-blue-600">See more</button>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 h-full">
        <div className="h-1/2">
          <p className="text-darkGreyText">Real Feel</p>
          <p className="text-greyText">{weatherData.current.feelslike_c}&deg;</p>
        </div>
        <div className="h-1/2">
          <p className="text-darkGreyText">Wind</p>
          <p className="text-greyText">{weatherData.current.wind_kph} km/h</p>
        </div>
        <div className="h-1/2">
          <p className="text-darkGreyText">Chance of rain</p>
          <p className="text-greyText">{chanceOfRain()}%</p>
        </div>
        <div className="h-1/2">
          <p className="text-darkGreyText">UV Index</p>
          <p className="text-greyText">{weatherData.current.uv}</p>
        </div>
      </div>
    </section>
  );
}