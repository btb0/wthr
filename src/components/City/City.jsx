// TODO: remove temp state import
import { useState } from 'react';

export default function City({ weatherData, chanceOfRain }) {
    // TODO: remove temporary test state: (this will be toggled between C and F in the settingsPage)
    const [temp, setTemp] = useState('C');

  if (!weatherData.location) return null;

  return (
    <section className='rounded-3xl grid grid-cols-2 grid-rows-3 mt-4 pl-11 h-1/3'>
      <div>
        <h1 className="text-white text-5xl">{weatherData.location.name}</h1>
      </div>
      <div className='col-start-1 row-start-2'>
        <h3 className="text-white">Chance of rain: {chanceOfRain()}%</h3>
      </div>
      <div className='col-start-1 row-start-3'>
        <h2 className="text-white text-7xl">
          { temp === 'C' ? 
            Math.round(weatherData.current.temp_c) 
            :
            Math.round(weatherData.current.temp_f)
          }
          &deg;
        </h2>
      </div>
      <div className='row-span-3 col-start-2 row-start-1 flex justify-center items-center'>
        <img className="row-span-2 h-5/6" src="storm.png" alt="temp image" />
      </div>
    </section>
    
  );
}
