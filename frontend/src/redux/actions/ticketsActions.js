import { GET_TICKETS, SEND_TICKET } from "./types";

const BASE_URL = "http://localhost:8080/api/reservations";

export const getTickets = (email) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/${email}`)
      .then((response) => response.json())
      .then((obj) => {
        dispatch({ type: GET_TICKETS, payload: obj });
      });
  };
};

export const sendTickets = (inputs) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}`, {
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
