// Service modules export business/app logic such as managing tokens, etc.
// Service modules often depend upon API modules for making AJAX requests to the server.

import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.signUp(userData);
  // Persist the 'token'
  localStorage.setItem('token', token);
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials)
  localStorage.setItem('token', token)
  return getUser();
}

export function getToken() {
  // getItem will return null if the key does not exist
  const token = localStorage.getItem('token');
  if (!token) return null;
  // Obtain the payload of the token
  const payload = JSON.parse(atob(token.split('.')[1]));
  // A JWT's exp (expiration) is expressed in seconds, not milliseconds
  if (payload.exp * 1000 < Date.now()) {
    // Token has expired - remove it from localStorage
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}