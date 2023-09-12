import { useState } from 'react';
import * as locationAPI from '../../utilities/location-api';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser, setUserCurrentLocation }) {
  const [formState, setFormState] = useState('LOGIN');

  function handleClick() {
    setFormState(formState === 'LOGIN' ? 'SIGNUP' : 'LOGIN');
  }

  async function getUserLocation() {
    const userLocation = await locationAPI.getUserLocation();
    setUserCurrentLocation(userLocation.city);
    console.log('yser location ', userLocation.city);
  }

  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={handleClick}>
        {
          formState === 'LOGIN' ? 'SIGN UP' : 'LOG IN'
        }
      </button>
      {
        formState === 'LOGIN' ? 
        <LoginForm setUser={setUser} getUserLocation={getUserLocation} />
        :
        <SignUpForm setUser={setUser} getUserLocation={getUserLocation} />
      }
    </main>
  );
}