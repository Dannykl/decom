import { combineReducers } from "redux";
import availableProducts from "../module/product/state/reducers/productReducer";

const rootReducer = combineReducers({
  availableProducts
});

export default rootReducer;
