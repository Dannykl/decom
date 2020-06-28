import {
  PRODUCT_SHOW_LOAD_REQUEST,
  PRODUCT_SHOW_LOAD_SUCCESS,
  PRODUCT_SHOW_LOAD_FAIL
} from "./actionsTypes";
import axios from "axios";
import * as constants from "../../../../utils/constants";

export const productShowLoadingRequest = () => ({
  type: PRODUCT_SHOW_LOAD_REQUEST
});

export const productShowLoadingSuccess = product => ({
  type: PRODUCT_SHOW_LOAD_SUCCESS,
  payload: product
});

export const productShowLoadingFail = message => ({
  type: PRODUCT_SHOW_LOAD_FAIL,
  payload: message
});

export const fetchProduct = id => {
  return dispatch => {
    dispatch(productShowLoadingRequest());
    axios
      .get(constants.url + `/item/${id}`)
      .then(response => dispatch(productShowLoadingSuccess(response)))
      .catch(error => dispatch(productShowLoadingFail(error.message)));
  };
};
