import React, { Component } from "react";
import PropTypes from "prop-types";
import "../products.scss";
import Grid from "@material-ui/core/Grid";
import CarouselShow from "../../common/CarouselShow";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

class ProductShow extends Component {
  render() {
    const { data, isItInCart, addedIntoCart } = this.props;
    let images = [data.image, data.image, data.image];
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <CarouselShow images={images} />
          <div className="price-section">
            <div>
              <h3>PRICE {"£" + data.price}</h3>
            </div>
            <div>
              <Button
                onClick={() => addedIntoCart(data)}
                style={{
                  backgroundColor: "#00796b",
                  color: "white",
                  borderColor: "white"
                }}
                startIcon={<AddShoppingCartIcon />}
              >
                {isItInCart ? "Added to Basket" : "Add to Basket"}
              </Button>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
          <h3>PRODUCT DETAILS</h3>
          <p>
            Him boisterous invitation dispatched had connection inhabiting
            projection. By mutual an mr danger garret edward an. Diverted as
            strictly exertion addition no disposal by stanhill. This call wife
            do so sigh no gate felt. You and abode spite order get. Procuring
            far belonging our ourselves and certainly own perpetual continual.
            It elsewhere of sometimes or my certainty. Lain no as five or at
            high.
          </p>
        </Grid>
      </Grid>
    );
  }
}
ProductShow.propTypes = {
  data: PropTypes.object,
  addedIntoCart: PropTypes.func,
  isItInCart: PropTypes.bool
};
export default ProductShow;
