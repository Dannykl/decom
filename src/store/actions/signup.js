import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import axios from "axios";
import * as constants from "../../utils/constants";

const request = () => {
  return {
    type: REGISTER_REQUEST
  };
};
const success = data => {
  return {
    type: REGISTER_SUCCESS,
    payload: data
  };
};
const fail = error => {
  return {
    type: REGISTER_FAIL,
    payload: error.data
  };
};

export const register = newUser => {
  const key = "061742fa04c8b99b23cf884869f49b8e";

  return dispatch => {
    dispatch(request());
    
    axios
      .post(constants.url + "/user/registration", newUser)
      .then(i =>
        i.status === 201
          ? dispatch(success(i))
          : dispatch(fail({ data: "SERVER ISSUE" }))
      )
      .catch(error => dispatch(fail(error.response)));

    // axios
    //   .get(
    //     `http://apilayer.net/api/check?access_key=${key}&email=${newUser.email}`
    //   )
    //   .then(response => {
    //     isEmailValid(response)
    //       ? axios
    //           .post(constants.url + "/user/registration", newUser)
    //           .then(i =>
    //             i.status === 201
    //               ? dispatch(success(i))
    //               : dispatch(fail({ data: "SERVER ISSUE" }))
    //           )
    //           .catch(error => dispatch(fail(error.response)))
    //       : dispatch(fail({ data: "Invalid email" }));
    //   })
    //   .catch();
  };
};

export const isEmailValid = apiResponse => {
  return apiResponse.data.smtp_check ? true : false;
};
