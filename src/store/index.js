import { combineReducers } from "redux";
import availableProducts from "./reducers/product";
import availableProductShow from "./reducers/productShow";
import favouriteProducts from "./reducers/productFavourite";
import cartProducts from "./reducers/productCart";
import authentication from "./reducers/signin";

const rootReducer = combineReducers({
  availableProducts,
  availableProductShow,
  authentication,
  favouriteProducts,
  cartProducts
});

export default rootReducer;
