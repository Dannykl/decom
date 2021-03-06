import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProduct } from "../../../actions/productShow";
import { CircularProgress } from "@material-ui/core";
import ProductShow from "../components/ProductShow";
import {
  addProductToCart,
  removeProductFromCart
} from "../../../actions/productCart";

class ProductShowContainer extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchProduct(parseInt(id));
  }

  handleCartClick = aProduct => {
    const item = { product: aProduct, quantity: 1 };
    const isAlreadyCart = this.isProductInCartList(aProduct);
    isAlreadyCart
      ? this.props.removeProductFromCart(item)
      : this.props.addProductToCart(item);
  };

  isProductInCartList = aProduct => {
    const products = this.props.cartProducts.products;
    if (this.props.cartProducts.products.length > 0) {
      const res = products.filter(i => i.product.id === aProduct.id).length > 0;
      return res;
    }
    return false;
  };

  render() {
    const { availableProductShow } = this.props;

    return (
      <div className="container-fluid products-wrapper">
        {availableProductShow.loadingProduct ? (
          <div id="loading" className="loading">
            <CircularProgress style={{ marginLeft: "50%", marginTop: "10%" }} />
          </div>
        ) : (
          <div>
            <ProductShow
              data={availableProductShow.product}
              isItInCart={this.isProductInCartList(
                availableProductShow.product
              )}
              addedIntoCart={this.handleCartClick}
            />
          </div>
        )}
      </div>
    );
  }
}

ProductShowContainer.propTypes = {
  availableProductShow: PropTypes.object,
  fetchProduct: PropTypes.func,
  match: PropTypes.object,
  cartProducts: PropTypes.object,
  addProductToCart: PropTypes.func,
  removeProductFromCart: PropTypes.func
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProduct,
      addProductToCart,
      removeProductFromCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductShowContainer);
