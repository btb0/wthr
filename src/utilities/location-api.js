const GEO_API_BASE_URL = 'https://nominatim.openstreetmap.org';

const IP_LOCATION_BASE_URL = 'https://ipgeolocation.abstractapi.com/v1';
const IP_API_KEY = process.env.REACT_APP_IP_API_KEY;

/* ========= Location Via Geolocation API ========= */

export function getUserLocation() {
  // Check if Geolocation API is supported in user's browser
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCb, errorCb);
  } else {
    // Geolocation API is not supported in the user's browser - so use IP location instead
    alert('Geolocation is not supported in your browser. Please allow location access or use a different browser to use this feature for a more accurate default response.');
    getCityFromIP();
  }
}
// User's location retrieved successfully
function successCb(position) {
  const { latitude: lat, longitude: long } = position.coords;
  getCityFromCoords(lat, long);
}
// There was an error retreiving the user's location // e.g. user denied location sharing permission - so use IP location instead
function errorCb() {
  // alert('Error while retrieving your location. Please try again later.');
  getCityFromIP();
}

async function getCityFromCoords(lat, long) {
  // Get user's current city using reverse geocoding
  const url = `${GEO_API_BASE_URL}/reverse?lat=${lat}&lon=${long}&format=json`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    // todo: update error message
    throw new Error ('Unable to fetch city data. Please try again later.');
  }
}

/* ========= Location Via IP Address ========= */

async function getCityFromIP() {
  const url = `${IP_LOCATION_BASE_URL}/?api_key=${IP_API_KEY}&fields=country,region,city`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log('ip data', data);
    return data;
  } catch (error) {
    // todo: update error message
    throw new Error ('Unable to fetch city data. Please try again later.');
  }
}