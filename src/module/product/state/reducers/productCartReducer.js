import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } from "../actions/actionsTypes";

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
          ...state.products.filter(data => data.id !== action.data.id)
        ]
      };
    default:
      return state;
  }
};

export default cartProducts;
