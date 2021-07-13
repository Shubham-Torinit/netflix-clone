import {combineReducers} from "redux";
import searchReducer from "./searchReducer";

const RootReducer = combineReducers({
  searchKey: searchReducer
});

export default RootReducer