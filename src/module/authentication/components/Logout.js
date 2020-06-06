import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { history } from "../../../utils/history";

class Logout extends React.Component {
  UNSAFE_componentWillMount() {
    reactLocalStorage.remove("currentUser");
    history.push("/");
  }
  render() {
    return null;
  }
}
export default Logout;
