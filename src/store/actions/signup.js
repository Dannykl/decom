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
const fail = data => {
  return {
    type: REGISTER_FAIL,
    payload: data
  };
};

export const register = newUser => {
  const key = "061742fa04c8b99b23cf884869f49b8e";

  return dispatch => {
    dispatch(request());
    axios
      .post(
        "https://guarded-ridge-50822.herokuapp.com/api/v1/user/registration",
        newUser
      )
      .then(response => console.log("danny api then", response))
      .catch(error => console.log("danny api then fail", error));
  };

  //   return dispatch => {
  //     dispatch(request());
  //     axios
  //       .get(
  //         `http://apilayer.net/api/check?access_key=${key}&email=${newUser.email}`
  //       )
  //       .then(response => {
  //         isEmailValid(response)
  //           ? axios
  //               .post(constants.url + "/user/registration", newUser)
  //               .then(
  //                 i => {
  //                   console.log("danny api ", i);
  //                 }
  //                 // i.state === 201
  //                 //   ? dispatch(success(newUser))
  //                 //   : dispatch(fail("message from api i.message"))
  //               )
  //               .catch("Network issue")
  //           : dispatch(fail("Invalid email"));
  //       })
  //       .catch();
  //   };
};

export const isEmailValid = apiResponse => {
  return apiResponse.data.smtp_check ? true : false;
};
