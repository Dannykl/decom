import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  INCREAMENT_QUANTITY,
  DECREAMENT_QUANTITY
} from "../actions/types";

export const initialState = {
  products: []
};
const cartProducts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_CART:
      return {
        ...state,
        products: [...state.products, action.data]
      };

    case REMOVE_PRODUCT_CART:
      return {
        products: [
          ...state.products.filter(
            data => data.product.id !== action.data.product.id
          )
        ]
      };
    case INCREAMENT_QUANTITY:
      return {
        ...state,
        products: action.payload.products
      };
    case DECREAMENT_QUANTITY:
      return {
        ...state,
        products: action.payload.products
      };

    default:
      return state;
  }
};

export default cartProducts;
