import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutCurrentUser } from "../state/actions/signAction";

class Logout extends React.Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(logoutCurrentUser());
  }
  render() {
    return null;
  }
}
Logout.propTypes = {
  dispatch: PropTypes.func
};
export default connect()(Logout);
