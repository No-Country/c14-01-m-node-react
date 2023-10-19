import { SIGN_UP, LOG_IN, LOG_OUT } from './types';

const BASE_URL = 'http://localhost:8080/api'

export const signUp = (inputs) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/users/register`,
      {
        method: "POST",
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(inputs)
      })
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: SIGN_UP, payload: obj }))
  }
};

export const logIn = (inputs) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/users/login`,
      {
        method: "POST",
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify(inputs)
      })
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: LOG_IN, payload: obj }))
  }
};

export const logOut = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/users/logout`,
      {
        method: "GET",
        headers: { 'Content-Type': 'application/JSON' },
        body: JSON.stringify()
      })
      .then(response => response.json())
      .then(obj =>
        dispatch({ type: LOG_OUT, payload: obj }))
  }
};
