import { combineReducers } from "redux";

// Make sure to import the reducer function from the reducer file, below is an exmaple:
import counterReducer from "./counterReducer.mjs";


export default combineReducers({
  // Add Reducers here ...
  // format:- reducerName: reducerFunction, below is an exmaple:
  counter: counterReducer,
});
