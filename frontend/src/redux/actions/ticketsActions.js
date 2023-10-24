import { GET_TICKETS, SEND_TICKET } from "./types";

const BASE_URL = "http://localhost:8080/api/places";
const URL_RESERVATIONS = "http://localhost:8080/api/reservations";

export const getTickets = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((obj) => {
        dispatch({ type: GET_TICKETS, payload: obj });
      });
  };
};

export const sendTickets = (inputs) => {
  return (dispatch) => {
    return fetch(`${URL_RESERVATIONS}`, {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((obj) => {
        dispatch({ type: SEND_TICKET });
      });
  };
};
