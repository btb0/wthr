import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import WeatherPage from '../WeatherPage/WeatherPage';
import SettingsPage from '../SettingsPage/SettingsPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App h-screen p-7 bg-dark">
      { user ?
        <>
          <Routes>
            {/* Route components in here */}
            <Route path='/' element={<WeatherPage user={user} setUser={setUser} />} />
            <Route path='/settings' element={<SettingsPage />} />
            {/* Redirect to Weather Page if path does not match any of the above */}
            <Route path='/*' element={<WeatherPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
