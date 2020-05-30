import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../../store/actions/productAction";

export class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (Object.keys(this.props.availableProducts.products).length == 0) {
      this.props.fetchProducts();
    }
  }

  render() {
    const { availableProducts } = this.props;
    console.log("props >>>", availableProducts);
    return (
      <div className="page-wrapper">
        {availableProducts.loadingProducts ? (
          <div>Loading...</div>
        ) : (
          <div>hello</div>
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
