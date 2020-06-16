import { ADD_PRODUCT_CART, REMOVE_PRODUCT_CART } from "./actionsTypes";

export function addProductToCart(data) {
  return {
    type: ADD_PRODUCT_CART,
    data
  };
}

export function removeProductFromCart(data) {
  return {
    type: REMOVE_PRODUCT_CART,
    data
  };
}
