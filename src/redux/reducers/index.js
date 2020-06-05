import { combineReducers } from "redux";
import result from "./result";
import counter  from "./counter";

export default combineReducers({resultReducer: result, counterReducer:counter});