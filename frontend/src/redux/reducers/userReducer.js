import { GET_USERS, SEND_USERS } from "../actions/types";

const initialState = {
  user: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, user: action.payload };
    case SEND_USERS:
      return { ...state };
    default:
      return state;
  }
}
