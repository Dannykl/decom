import * as types from "../actions/actionsTypes";

export const initialState = {
  logging: false,
  loggedIn: false,
  currentUser: {},
  errorMessage: null
};
export default function authentication(state = initialState, action) {
  switch (action.type) {
    case types.LOGGING_REQUEST:
      return {
        ...state,
        logging: true,
        errorMessage: null
      };
    case types.LOGGING_SUCCESS:
      return {
        logging: false,
        loggedIn: true,
        currentUser: action.payload,
        errorMessage: null
      };
    case types.LOGGING_FAIL:
      return {
        currentUser: {},
        loggedIn: false,
        logging: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}
