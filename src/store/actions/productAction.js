import {
  PRODUCTS_LOAD_REQUEST,
  PRODUCTS_LOAD_SUCCESS,
  PRODUCTS_LOAD_FAIL
} from "./actionsTypes";
import axios from "axios";

export const productsLoadingRequest = () => ({
  type: PRODUCTS_LOAD_REQUEST
});

export const productsLoadingSuccess = products => ({
  type: PRODUCTS_LOAD_SUCCESS,
  payload: products
});

export const productsLoadingFail = message => ({
  type: PRODUCTS_LOAD_FAIL,
  payload: message
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(productsLoadingRequest());
    axios
      .get("https://guarded-ridge-50822.herokuapp.com/api/v1/item")
      .then(response => dispatch(productsLoadingSuccess(response)))
      .catch(error => dispatch(productsLoadingFail(error.message)));
  };
};
