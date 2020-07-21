import {
  PRODUCTS_LOAD_REQUEST,
  PRODUCTS_LOAD_SUCCESS,
  PRODUCTS_LOAD_FAIL
} from "./types";
import axios from "axios";
import * as constants from "../utils/constants";

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
      .get(constants.url + "/item")
      .then(response => dispatch(productsLoadingSuccess(response)))
      .catch(error => dispatch(productsLoadingFail(error.message)));
  };
};
