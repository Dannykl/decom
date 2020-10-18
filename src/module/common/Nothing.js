import React from "react";
import PropTypes from "prop-types";
import "./common.scss";

const Nothing = ({ page }) => {
  return <div className="nothing">NOTHING ON {page}</div>;
};
Nothing.propTypes = {
  page: PropTypes.string
};

export default Nothing;
