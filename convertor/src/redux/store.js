import { createStore, combineReducers } from "redux";
import currency_reducer from "./currency_reducer";

let reducers = combineReducers({
  data: currency_reducer,
});

let store = createStore(reducers);

export default store;
