import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { history } from "../../../utils/history";
import "../cart.scss";

const CartSummary = ({ prop }) => {
  let sum = 0;
  for (let i = 0; i < prop.data.length; i++) {
    sum += prop.data[i].product.price * prop.data[i].quantity;
  }
  return (
    <React.Fragment>
      <Paper className="cart-summary-wrapper">
        <Typography className="cart-summary-summary">{"Summary"}</Typography>
        {prop.data.map((each, key) => (
          <div key={key}>
            <div className="cart-summary-content">
              {key < 1 ? <label>{"Sub total"}</label> : <label></label>}
              <Typography>
                {each.product.price} * {each.quantity} ={" £"}
                {each.product.price * each.quantity}
              </Typography>
            </div>
          </div>
        ))}
        <div className="cart-summary-content">
          <label>{"Total"}</label>
          <Typography>{"£" + sum}</Typography>
        </div>
      </Paper>
      <Button
        onClick={
          prop.isLoggedIn
            ? () => history.push("/user")
            : () => history.push("/login")
        }
        className="cart-summary-btn"
        variant="outlined"
      >
        PROCEED
      </Button>
    </React.Fragment>
  );
};

CartSummary.propTypes = {
  prop: PropTypes.object
};
export default CartSummary;
