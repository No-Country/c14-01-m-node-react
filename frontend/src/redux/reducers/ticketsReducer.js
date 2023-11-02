import { DELETE_TICKET, GET_TICKETS, SEND_TICKET } from "../actions/types";

const initialState = {
  reservations: [],
  deleteMessage: null,
  ticket: null
};

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return { ...state, reservations: [...action.payload], ticket: null, deleteMessage: null };
    case SEND_TICKET:
      return { ...state, ticket: action.payload, deleteMessage: null  };
    case DELETE_TICKET:
      return { ...state, ticket: null, deleteMessage: action.payload.message };
    default:
      return state;
  }
}
