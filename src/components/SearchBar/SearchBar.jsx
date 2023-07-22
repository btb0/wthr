import { useState } from 'react';
import * as weatherAPI from '../../utilities/weather-api';

export default function SearchBar() {
  const [location, setLocation] = useState('');

  function handleChange(evt) {
    setLocation(evt.target.value);
  }

  async function handleSearch() {
    try {
      const weather = await weatherAPI.getWeatherData(location);
      console.log(weather); // remove
    } catch {
      // TODO: create actual error handle
      throw new Error ('Something went wrong');
    }
  }

  return (
    // TODO: Remove temp black styling
    <input 
      className='text-black'
      type="text" 
      value={location}
      onChange={handleChange}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter') {
          handleSearch();
        }
      }}
    />
  );
}