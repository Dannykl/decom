import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../../store/actions/productAction";
import "./products.scss";
import ProductCard from "./ProductCard";
import * as constants from "../../utils/constants";
import Spinner from "../common/Spinner";

export class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.availableProducts.products).length == 0) {
      this.props.fetchProducts();
    }
  }
  handleProductClick = aProduct => {
    console.log("product is clickeddd ", aProduct);
  };
  render() {
    const { availableProducts } = this.props;
    return (
      <div className="container-fluid products-wrapper">
        {availableProducts.loadingProducts ? (
          <div id="loading" className="loading">
            Loading...
            <Spinner />
          </div>
        ) : (
          <div>
            <div className="row">
              {this.props.availableProducts.products.map(i => (
                // {constants.productsObjs.products.map(i => (
                <div
                  key={i.id}
                  id="card-item"
                  className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
                >
                  <ProductCard
                    data={i}
                    selectedProduct={this.handleProductClick}
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
      fetchProducts
    },
    dispatch
  );
ProductsPage.propTypes = {
  availableProducts: PropTypes.object,
  fetchProducts: PropTypes.func
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
