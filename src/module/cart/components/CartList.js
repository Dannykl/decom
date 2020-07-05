import React from "react";
import PropTypes from "prop-types";
import ChosenProducts from "../../common/ChosenProducts";

// TODO
/*
IMAGE COMPONENT        
NUMBER OF ITEMS
PRICE FOR SINGLE ROW
REMOVE THIS ITEM
*/

class CartList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <React.Fragment>
        {data.map(each => {
          return (
            <ChosenProducts
              key={each.id}
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
