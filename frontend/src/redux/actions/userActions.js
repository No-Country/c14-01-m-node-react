import axios from "axios";
import { GET_USERS, SEND_USERS } from "./types";

//const BASE_URL = "http://localhost:8080/api/users";
const BASE_URL = "https://c14-01-m-node-react-production.up.railway.app/api/users"

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
        if (response.statusText == "OK")
          dispatch({ type: SEND_USERS, payload: response.data.user });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
