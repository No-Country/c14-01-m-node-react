import { SIGN_UP, LOG_IN, LOG_OUT } from '../actions/types';

let token = localStorage.getItem('auth_token');
if (token === 'undefined') token = null

const initialState = {
  user: { status: null, message: null, token: token },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return {
        user: action.payload,
      }
    case LOG_IN:
      return {
        user: action.payload,
      }
    case LOG_OUT:
      return {
        user: { status: null, message: null, token: null },
      }
    default: {
      return state;
    }
  }
};

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem('auth_token', token)
};
