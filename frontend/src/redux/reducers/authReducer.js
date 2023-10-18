import { SIGN_UP, LOG_IN, LOG_OUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: { status: null, message: null },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        isAuthenticated: true,
        user: action.payload,
      }
    case LOG_IN:
      return {
        isAuthenticated: true,
        user: action.payload,
      }
    case LOG_OUT:
      return {
        isAuthenticated: false,
        user: null,
      }
    default: {
      return state;
    }
  }
};
