import { combineReducers } from "redux";
import availableProducts from "../module/product/state/reducers/productReducer";
import authentication from "../module/authentication/state/reducers/signinReducer";

const rootReducer = combineReducers({
  availableProducts,
  authentication
});

export default rootReducer;
