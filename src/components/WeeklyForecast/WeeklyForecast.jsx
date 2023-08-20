import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import DailyWeather from '../DailyWeather/DailyWeather';

// 7-Day Forecast on right side of WeatherPage
export default function WeeklyForecast({ weatherData }) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove(evt) {
    let { clientX, clientY, currentTarget} = evt;
    // Gets how much offset the element is from the top left of the viewport
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const dailyWeather = weatherData.forecast?.forecastday.map((day, idx) => (
    <DailyWeather day={day} idx={idx} key={day.date_epoch} />
  ));

  return (
    <section 
      onMouseMove={handleMouseMove} 
      className="relative overflow-hidden bg-componentDark rounded-3xl ml-6 mt-16 flex w-1/2 flex-col p-9 max-w-lg group"
    >
      <motion.div className='pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.15), transparent 80%)`
        }}
      />
      <h2 className="mb-3 text-darkGreyText">7-Day Forecast</h2>
      <ul className='h-full flex flex-col'>
        {dailyWeather}
      </ul>
    </section>
  );
}