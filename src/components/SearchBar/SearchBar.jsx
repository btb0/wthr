import * as weatherAPI from '../../utilities/weather-api';

export default function SearchBar({ location, setLocation, setWeatherData }) {
  function handleChange(evt) {
    setLocation(evt.target.value);
  }

  async function handleSearch() {
    try {
      const weather = await weatherAPI.getWeatherData(location);
      setWeatherData(weather);
      console.log(weather); // remove
    } catch {
      // TODO: create actual error handle
      throw new Error ('Something went wrong');
    }
  }

  return (
    <input 
      className='bg-componentDark rounded-xl leading-10 w-7/12 text-white pl-3'
      type="text" 
      value={location}
      placeholder='Search by City or Zip Code'
      onChange={handleChange}
      onKeyDown={(evt) => {
        if (evt.key === 'Enter') {
          handleSearch();
        }
      }}
    />
  );
}