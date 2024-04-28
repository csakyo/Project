import { createStore, combineReducers } from "redux";
import { reducer } from "./modules/counter";

const reducers = combineReducers({
  conuter: reducer,
});

export default createStore(reducers);
