import React from "react";
import PropTypes from "prop-types";
import ChosenProducts from "../../common/ChosenProducts";
import Button from "@material-ui/core/Button";

class CartList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ backgroundColor: "purple", width: "100%" }}>
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
        </div>
        {/* <div
          style={{
            textAlign: "center",
            marginTop: "15%",
            width: "30%"
          }}
        >
          <Button id="login-signup-btn" variant="outlined">
            CHECK-OUT
          </Button>
        </div> */}
      </div>
    );
  }
}

CartList.propTypes = {
  data: PropTypes.array
};
export default CartList;
