import {
  PRODUCT_FAVOURITE_REQUEST,
  PRODUCT_FAVOURITE_SUCCESS,
  PRODUCT_FAVOURITE_FAIL,
  FAVOURITE_ADD,
  FAVOURITE_REMOVE
} from "./actionsTypes";

export function addFaviourite(data) {
  return {
    type: FAVOURITE_ADD,
    data
  };
}

export function removeFaviourite(data) {
  return {
    type: FAVOURITE_REMOVE,
    data
  };
}

// export const favouriteRequest = () => ({
//   type: PRODUCT_FAVOURITE_REQUEST
// });
// export const favouriteSuccess = payload => ({
//   type: PRODUCT_FAVOURITE_SUCCESS,
//   payload: payload
// });
// export const favouriteFail = error => ({
//   type: PRODUCT_FAVOURITE_FAIL,
//   payload: error
// });

// export const manageFavouriteProduct = data => {
//   return dispatch => {
//     dispatch(favouriteRequest())
//       .then(_ => dispatch(favouriteSuccess(data)))
//       .catch(_ => dispatch(favouriteFail("error on favourite")));
//   };
// };
// export const addProduct = () => {};
