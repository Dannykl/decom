import { FAVOURITE_ADD, FAVOURITE_REMOVE }  from "../actions/types";

export const initialState = {
  products: []
};
const favouriteProducts = (state = initialState, action) => {
  switch (action.type) {
    case FAVOURITE_ADD:
      return {
        ...state,
        products: [...state.products, action.data]
      };

    case FAVOURITE_REMOVE:
      return {
        products: [
          ...state.products.filter(data => data.id !== action.data.id)
        ]
      };
    default:
      return state;
  }
};

export default favouriteProducts;
