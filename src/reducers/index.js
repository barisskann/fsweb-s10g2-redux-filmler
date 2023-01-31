import { combineReducers } from "redux";
import { legacy_createStore as createStore } from "redux";
import movieReducer from "./movieReducer";

export const store = createStore(movieReducer);
export default movieReducer;
