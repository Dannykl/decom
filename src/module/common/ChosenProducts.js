import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./common.scss";

const ChosenProducts = ({ data, prop }) => {
  return (
    <>
      <Card id="chosen-product-wrapper">
        <div id="chosen-product-container">
          <div className="chosen-product-image-desc">
            <CardMedia
              id="chosen-product-image"
              image={data.product.image}
              title="product image"
            ></CardMedia>

            <div className="chosen-product-card-content">
              <CardContent id="chosen-product-card-content">
                <Typography>
                  {data.product.description} {data.product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  brand
                </Typography>
              </CardContent>
            </div>
          </div>
          <div className="chosen-product-second-section">
            <div className="chosen-product-add-section">
              <ButtonGroup>
                <Button
                  arial-label="increase"
                  onClick={() => prop.decreament(data.product)}
                  disabled={data.quantity < 2 ? true : false}
                >
                  <RemoveIcon fontSize="small" />
                </Button>
                <Button className="chosen-product-quantity" disabled={true}>
                  {data.quantity}
                </Button>
                <Button
                  arial-label="increase"
                  onClick={() => prop.increament(data.product)}
                >
                  <AddIcon fontSize="small" />
                </Button>
              </ButtonGroup>
            </div>
            <div className="chosen-product-price-delete-section">
              <Button className="chosen-product-price" disabled={true}>
                {"£" + data.product.price * data.quantity}
              </Button>
              <Button
                onClick={() => prop.deleteProduct(data)}
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                id="chosen-product-btn"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
ChosenProducts.propTypes = {
  data: PropTypes.object,
  prop: PropTypes.object
};
export default ChosenProducts;
