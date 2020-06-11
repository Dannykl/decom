import { FAVOURITE_ADD, FAVOURITE_REMOVE } from "../actions/actionsTypes";

export const initialState = {
  favouriteProducts: []
};
const favouriteProducts = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITE_ADD:
      return {
        ...state,
        favouriteProducts: [...state.favouriteProducts, action.data]
      };

    case FAVOURITE_REMOVE:
      return {
        favouriteProducts: [
          ...state.favouriteProducts.filter(data => data.id !== action.data.id)
        ]
      };
    default:
      return state;
  }
};

export default favouriteProducts;

// export const initialState = {
//   loadingFavouriteProduct: false,
//   favouriteProducts: [],
//   loadedFavouriteProducts: false,
//   errorMessage: null
// };

// export default function favouriteProducts(state = initialState, action) {
//   switch (action.type) {
//     case types.PRODUCT_FAVOURITE_REQUEST:
//       return {
//         ...state,
//         loadingFavouriteProduct: true,
//         errorMessage: null
//       };

//     case types.PRODUCT_FAVOURITE_SUCCESS:
//       return {
//         loadingFavouriteProduct: false,
//         loadedFavouriteProducts: true,
//         favouriteProducts: action.payload,
//         errorMessage: null
//       };
//     case types.PRODUCT_FAVOURITE_FAIL:
//       return {
//         favouriteProducts: [],
//         loadingFavouriteProduct: false,
//         loadedFavouriteProducts: false,
//         errorMessage: action.payload
//       };
//     default:
//       return state;
//   }
// }
