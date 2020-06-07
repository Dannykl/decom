import { LOGGING_REQUEST, LOGGING_SUCCESS, LOGGING_FAIL } from "./actionsTypes";
import axios from "axios";
import * as constants from "../../../../utils/constants";

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
  payload: message
});

export const signin = (_email, _password) => {
  let data = {
    email: _email,
    password: _password
  };
  return dispatch => {
    dispatch(loggingRequest(_email));
    axios
      .post(constants.url + "/authenticate", data)
      .then(response =>
        dispatch(loggingSuccess(processingData(_email, response)))
      )
      .catch(error => dispatch(loggingFail(error.message)));
  };
};

const processingData = (email, payload) => {
  let user = {
    userName: email,
    token: "bearer " + payload.data
  };
  return user;
};
