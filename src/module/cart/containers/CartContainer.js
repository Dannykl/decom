import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartList from "../components/CartList";
import Nothing from "../../common/Nothing";
import {
  removeProductFromCart,
  increamentQuantity,
  decreamentQuantity
} from "../../../actions/productCart";
import { cloning } from "../../../utils/cloning";

class CartContainer extends React.Component {
  deleteProduct = product => {
    this.props.removeProductFromCart(product);
  };
  increament = product => {
    const operator = "add";
    const newProducts = cloning(this.props.cartProducts, product, operator);
    this.props.increamentQuantity(newProducts);
  };
  decreament = product => {
    const operator = "";
    const newProducts = cloning(this.props.cartProducts, product, operator);
    this.props.increamentQuantity(newProducts);
  };

  render() {
    const products = this.props.cartProducts.products;

    return products.length > 0 ? (
      <CartList
        data={products}
        deleteProduct={this.deleteProduct}
        increament={this.increament}
        decreament={this.decreament}
      />
    ) : (
      <Nothing page={"CART"} />
    );
  }
}

CartContainer.propTypes = {
  cartProducts: PropTypes.object,
  removeProductFromCart: PropTypes.func,
  increamentQuantity: PropTypes.func,
  decreamentQuantity: PropTypes.func
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeProductFromCart,
      increamentQuantity,
      decreamentQuantity
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);

{
  /* <Grid container spacing={3}>
<Grid item xs={12} sm={12} md={6} lg={8} xl={8}> */
}
