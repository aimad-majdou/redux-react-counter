import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const logger = store => next => action => {
    console.log('dispatching', action)
    console.log('previous state', store.getState())
    let result = next(action)
    console.log('next state', store.getState())
    return result
  }
  

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));