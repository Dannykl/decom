import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CartList from "../components/CartList";
import Nothing from "../../common/Nothing";
import { removeProductFromCart } from "../../../store/actions/productCart";

class CartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  //delete item
  deleteProduct = product => {
    this.props.removeProductFromCart(product);
  };
  increament = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };
  decreament = () => {
    this.setState({
      quantity: this.state.quantity - 1
    });
  };
  //ORDER
  //product, quantity and price
  // order :[
  // item:
  // quantity:
  // price:
  //]

  render() {
    const { products } = this.props.cartProducts;
    const { quantity } = this.state;

    console.log("products cart ", products);
    return products.length > 0 ? (
      <CartList
        data={products}
        deleteProduct={this.deleteProduct}
        quantity={quantity}
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
  removeProductFromCart: PropTypes.func
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeProductFromCart
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
