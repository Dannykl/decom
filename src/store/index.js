import { combineReducers } from "redux";
import availableProducts from "../reducers/product";
import availableProductShow from "../reducers/productShow";
import favouriteProducts from "../reducers/productFavourite";
import cartProducts from "../reducers/productCart";
import authentication from "../reducers/signin";
import search from "../reducers/search";
import registerNewUser from "../reducers/signup";
import currentUser from "../reducers/currentUser";

const rootReducer = combineReducers({
  availableProducts,
  availableProductShow,
  authentication,
  favouriteProducts,
  cartProducts,
  search,
  registerNewUser,
  currentUser
});

export default rootReducer;
