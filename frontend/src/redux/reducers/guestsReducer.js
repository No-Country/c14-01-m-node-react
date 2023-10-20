import { INCREASE_GUESTS, DECREASE_GUESTS } from '../actions/types';

const initialState = 1;

export default function guestsReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_GUESTS:
      return state + 1;
    case DECREASE_GUESTS:
      return state - 1;
    default: {
      return state;
    }
  }
};
