import { GET_TICKETS } from "./types";

const BASE_URL = 'http://localhost:8080/api/places'

export const getTickets = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}`)
      .then(response => response.json())
      .then(obj => {
        dispatch({ type: GET_TICKETS, payload: obj })
      })
  }
};
