import {
  ADD_PRODUCT_CART,
  REMOVE_PRODUCT_CART,
  INCREAMENT_QUANTITY,
  DECREAMENT_QUANTITY
} from "./types";

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

export function increamentQuantity(products) {
  return { type: INCREAMENT_QUANTITY, payload: products };
}

export function decreamentQuantity(products) {
  return { type: DECREAMENT_QUANTITY, payload: products };
}
