import React from "react";
import PropTypes from "prop-types";
import ChosenProducts from "../../common/ChosenProducts";

class CartList extends React.Component {
  render() {

    const { data } = this.props;
    return (
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
    );
  }
}

CartList.propTypes = {
  data: PropTypes.array
};
export default CartList;
