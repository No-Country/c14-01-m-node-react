import { GET_TICKETS } from '../actions/types';

const initialState = [];

export default function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return [...action.payload];
    default:
      return state;
  }
};
