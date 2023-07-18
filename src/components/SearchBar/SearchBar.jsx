import { useState } from 'react';
import * as weatherAPI from '../../utilities/weather-api';

export default function SearchBar() {
  const [city, setCity] = useState('');

  function handleChange(evt) {
    setCity(evt.target.value);
  }

  async function handleSearch() {
    const weather = await weatherAPI.getWeatherByCity(city)
    alert(JSON.stringify(weather));
  }

  return (
    // TODO: Remove temp black styling
    <input 
      className='text-black'
      type="text" 
      value={city}
      onChange={handleChange}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter') {
          handleSearch();
        }
      }}
    />
  );
}