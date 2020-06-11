import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../state/actions/productAction";
import {
  addFaviourite,
  removeFaviourite
} from "../state/actions/productFavouriteAction";
import "../products.scss";
import ProductCard from "./ProductCard";
import * as constants from "../../../utils/constants";
import { CircularProgress } from "@material-ui/core";

export class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.availableProducts.products).length == 0) {
      // this.props.fetchProducts();
    }
  }

  handleProductClick = aProduct => {
    console.log("product is clicked for product detail ", aProduct);
  };
  handleFavouriteClick = aProduct => {
    const isAlreadyLiked = this.isProductInFavouriteList(aProduct);
    isAlreadyLiked
      ? this.props.removeFaviourite(aProduct)
      : this.props.addFaviourite(aProduct);
  };

  isProductInFavouriteList = aProduct => {
    const products = this.props.favouriteProducts;
    const res =
      products.favouriteProducts.filter(i => i.id == aProduct.id).length > 0;
    return res;
  };

  render() {
    const { availableProducts } = this.props;
    console.log("props is ", this.props.favouriteProducts);
    return (
      <div className="container-fluid products-wrapper">
        {availableProducts.loadingProducts ? (
          <div id="loading" className="loading">
            <CircularProgress style={{ marginLeft: "50%", marginTop: "10%" }} />
          </div>
        ) : (
          <div>
            <div className="sale-wrapper">
              <p>SALE</p>
            </div>
            <div className="row">
              {/* {this.props.availableProducts.products.map(i => ( */}
              {constants.productsObjs.products.map(i => (
                <div
                  key={i.id}
                  id="card-item"
                  className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                >
                  <ProductCard
                    data={i}
                    selectedProduct={this.handleProductClick}
                    isFavourite={this.isProductInFavouriteList(i)}
                    favourClicked={this.handleFavouriteClick}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      addFaviourite,
      removeFaviourite
    },
    dispatch
  );
ProductsPage.propTypes = {
  availableProducts: PropTypes.object,
  fetchProducts: PropTypes.func,
  addFaviourite: PropTypes.func,
  removeFaviourite: PropTypes.func,
  favouriteProducts: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
