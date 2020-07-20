import * as types from "../actions/types";

export const initialState = {
  loadingProducts: false,
  products: [],
  loadedProducts: false,
  errorMessage: null
};

export default function availableProducts(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCTS_LOAD_REQUEST:
      return {
        ...state,
        loadingProducts: true,
        errorMessage: null
      };

    case types.PRODUCTS_LOAD_SUCCESS:
      return {
        loadingProducts: false,
        loadedProducts: true,
        products: action.payload.data,
        errorMessage: null
      };
    case types.PRODUCTS_LOAD_FAIL:
      return {
        products: [],
        loadingProducts: false,
        loadedProducts: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
