import { GET_TICKETS, SEND_TICKET } from "../actions/types";

const initialState = {
  reservations: [],
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return { ...state, reservations: [...action.payload] };
    case SEND_TICKET:
      return state;
    default:
      return state;
  }
}
