import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import guestsReducer from "./reducers/guestsReducer";
import ticketsReducer from "./reducers/ticketsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  guests: guestsReducer,
  tickets: ticketsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
