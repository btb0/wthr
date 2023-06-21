import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [formState, setFormState] = useState('LOGIN');

  function handleClick() {
    setFormState(formState === 'LOGIN' ? 'SIGNUP' : 'LOGIN');
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
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
      }
    </main>
  );
}