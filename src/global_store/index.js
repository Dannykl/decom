import { combineReducers } from "redux";
import availableProducts from "../module/product/state/reducers/productReducer";
import availableProductShow from "../module/product/state/reducers/productShowReducer";
import favouriteProducts from "../module/product/state/reducers/productFavouriteReducer";
import cartProducts from "../module/product/state/reducers/productCartReducer";
import authentication from "../module/authentication/state/reducers/signinReducer";

const rootReducer = combineReducers({
  availableProducts,
  availableProductShow,
  authentication,
  favouriteProducts,
  cartProducts
});

export default rootReducer;
