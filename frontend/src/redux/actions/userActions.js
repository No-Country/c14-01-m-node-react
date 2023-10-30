import axios from "axios";
import { GET_USERS, SEND_USERS } from "./types";

const BASE_URL = "http://localhost:8080/api/users";

export const getUsers = (email) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}/email/${email}`)
      .then((response) => {
        console.log("response", response);
        dispatch({ type: GET_USERS, payload: response.data.user });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const sendUsers = (values, id) => {
  return (dispatch) => {
    return axios
      .put(`${BASE_URL}/${id}`, {
        ...values,
      })
      .then((response) => {
        console.log("response", response);
        dispatch({ type: SEND_USERS, payload: response.data.user });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
