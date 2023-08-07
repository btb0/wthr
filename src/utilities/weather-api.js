const BASE_URL = 'http://api.weatherapi.com/v1';
const NUM_OF_FORECAST_DAYS = 7; // Using 7 days with trial, will have to switch to 3 days when trial ends
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export async function getWeatherData(location) {
  const city = encodeURIComponent(location); 
  try {
    const weather_data = await getCurrentWeather(city);
    return weather_data;
  } catch {
    // TODO: Make actual error message / status
    throw new Error ('Something went wrong');
  }
}

async function getCurrentWeather(city) {
  // Includes both current weather and the Forecast
  const url = `${BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${city}&days=${NUM_OF_FORECAST_DAYS}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch {
    // TODO: Make actual error message / status
    throw new Error ('Something went wrong');
  }
}