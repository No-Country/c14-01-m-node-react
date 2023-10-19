import { INCREASE_GUESTS, DECREASE_GUESTS } from './types';

export const increaseGuests = () => {
  return (dispatch) => {
    return dispatch({
      type: INCREASE_GUESTS,
    });
  }
};

export const decreaseGuests = () => {
  return (dispatch) => {
    return dispatch({
      type: DECREASE_GUESTS,
    });
  }
};
