import { SEARCH_ADD, SEARCH_REMOVE } from "../actions/types";

export const initialState = {
  value: ""
};
const searchProduct = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ADD:
      return {
        ...state,
        value: action.payload
      };
    case SEARCH_REMOVE:
      return {
        ...state,
        value: action.payload
      };

    default:
      return state;
  }
};

export default searchProduct;
