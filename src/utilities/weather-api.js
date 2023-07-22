const BASE_URL = 'http://api.weatherapi.com/v1';
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getWeatherData(location) {
  try {
    const city = encodeURIComponent(location);
    const data = await getCurrentWeather(city);
    return data;
  } catch {
    // TODO: Make actual error message / status
    throw new Error ('Something went wrong');
  }
}

export async function getCurrentWeather(city) {
  const url = `${BASE_URL}/current.json?key=${API_KEY}&q=${city}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch {
    // TODO: Make actual error message / status
    throw new Error ('Something went wrong');
  }
}