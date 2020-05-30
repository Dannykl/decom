import { combineReducers } from "redux";
import availableProducts from "./productReducer";

const rootReducer = combineReducers({
  availableProducts
});

export default rootReducer;
