const BASE_URL = 'https://api.open-meteo.com/v1';

export async function getWeatherByCity(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `${BASE_URL}/forecast?city=${encodedCity}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data
  } catch (err) {
    throw new Error ('An error occured while fetching weather data');
  }
}