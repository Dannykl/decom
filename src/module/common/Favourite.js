import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}))(Badge);

export default function Favourite() {
  return (
    <IconButton aria-label="cart" className="cart-icon">
      <StyledBadge badgeContent={1} color="secondary">
        <FavoriteBorderIcon />
      </StyledBadge>
    </IconButton>
  );
}
