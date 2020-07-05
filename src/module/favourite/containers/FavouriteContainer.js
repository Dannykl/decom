import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CircularProgress } from "@material-ui/core";

class FavouriteContainer extends React.Component {
  render() {
    return null;
  }
}

FavouriteContainer.propTypes = {};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteContainer);
