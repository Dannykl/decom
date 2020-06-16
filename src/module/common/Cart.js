import React from "react";
import PropTypes from "prop-types";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function Cart({ val }) {
  return (
    <IconButton aria-label="cart" className="cart-icon">
      <StyledBadge badgeContent={val} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
Cart.propTypes = {
  val: PropTypes.number
};
