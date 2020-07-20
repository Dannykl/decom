import {
  LOGGING_REQUEST,
  LOGGING_SUCCESS,
  LOGGING_FAIL,
  LOGOUT
} from "./types";
import axios from "axios";
import * as constants from "../../utils/constants";
import history from "../../module/common/history";

export const loggingRequest = email => ({
  type: LOGGING_REQUEST,
  payload: email
});

export const loggingSuccess = payload => ({
  type: LOGGING_SUCCESS,
  payload: payload
});

export const loggingFail = message => ({
  type: LOGGING_FAIL,
  payload: constants.incorrectDetails + message.response.statusText
});
export const logout = () => ({
  type: LOGOUT,
  payload: null
});

export const signin = data => {
  return dispatch => {
    dispatch(loggingRequest(data.email));
    axios
      .post(constants.url + "/authenticate", data)
      .then(response =>
        dispatch(loggingSuccess(processingData(data.email, response)))
      )
      .catch(error => dispatch(loggingFail(error)));
  };
};

export function logoutCurrentUser() {
  return function(dispatch) {
    return dispatch(logout(), history.push("/"));
  };
}
const processingData = (email, payload) => {
  let user = {
    userName: email,
    token: "bearer " + payload.data
  };
  return user;
};
