import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions/types";

export const INITIAL_STATE = {
  registering: false,
  registered: false,
  errorMessage: null
};

const registerNewUser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        registering: true,
        registered: false,
        errorMessage: null
      };
    case REGISTER_SUCCESS:
      return {
        registering: false,
        registered: true,
        errorMessage: null
      };
    case REGISTER_FAIL:
      return {
        registering: false,
        registered: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
export default registerNewUser;
