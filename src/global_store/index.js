import { combineReducers } from "redux";
import availableProducts from "../module/product/state/reducers/productReducer";
import favouriteProducts from "../module/product/state/reducers/productFavouriteReducer";
import authentication from "../module/authentication/state/reducers/signinReducer";

const rootReducer = combineReducers({
  availableProducts,
  authentication,
  favouriteProducts
});

export default rootReducer;
