import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { history } from "../../../utils/history";
import "../cart.scss";

const CartSummary = ({ data }) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].product.price * data[i].quantity;
  }
  return (
    <React.Fragment>
      <Paper className="cart-summary-wrapper">
        <Typography className="cart-summary-summary">{"Summary"}</Typography>
        {data.map((each, key) => (
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
        onClick={() => history.push("/user")}
        className="cart-summary-btn"
        variant="outlined"
      >
        PROCEED
      </Button>
    </React.Fragment>
  );
};

CartSummary.propTypes = {
  data: PropTypes.array
};
export default CartSummary;
