import * as types from "../actions/actionsTypes";

export const initialState = {
  loadingProduct: false,
  product: {},
  loadedProduct: false,
  errorMessage: null
};

export default function availableProductShow(state = initialState, action) {
  switch (action.type) {
    case types.PRODUCT_SHOW_LOAD_REQUEST:
      return {
        ...state,
        loadingProduct: true,
        errorMessage: null
      };

    case types.PRODUCT_SHOW_LOAD_SUCCESS:
      return {
        loadingProduct: false,
        loadedProduct: true,
        product: action.payload.data,
        errorMessage: null
      };
    case types.PRODUCT_SHOW_LOAD_FAIL:
      return {
        product: {},
        loadingProduct: false,
        loadedProduct: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
