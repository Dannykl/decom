import React from "react";
import PropTypes from "prop-types";
import ChosenProducts from "../../common/ChosenProducts";
import CartSummary from "../components/CartSummary";
import Grid from "@material-ui/core/Grid";

class CartList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <React.Fragment>
            {data.map(each => {
              return (
                <ChosenProducts
                  key={each.product.id}
                  data={each}
                  prop={this.props}
                />
              );
            })}
          </React.Fragment>
        </Grid>
        <Grid
          style={{
            paddingRight: "5%"
          }}
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
        >
          <CartSummary
            prop={this.props}
          />
        </Grid>
      </Grid>
    );
  }
}

CartList.propTypes = {
  data: PropTypes.array
};
export default CartList;
