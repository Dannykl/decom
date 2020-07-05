import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import "./common.scss";

const useStyles = makeStyles(theme => ({
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

const ChosenProducts = ({ data, prop }) => {
  const classes = useStyles();

  return (
    <>
      <Card id="chosen-product-wrapper">
        <CardMedia
          id="chosen-product-image"
          image={data.product.image}
          title="product image"
        />
        <div className={classes.controls} id="chosen-product-container">
          <CardContent className="chosen-product-card-content">
            <Typography>
              {data.product.description} {data.product.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              brand
            </Typography>
          </CardContent>
          <div className="chosen-product-add-section">
            <IconButton
              onClick={() => prop.decreament(data.product)}
              disabled={data.quantity < 2 ? true : false}
              aria-label="previous"
            >
              <RemoveIcon />
            </IconButton>
            <Typography
              className="chosen-product-quantity"
              variant="subtitle1"
              color="textSecondary"
            >
              {data.quantity}
            </Typography>

            <IconButton
              onClick={() => prop.increament(data.product)}
              aria-label="previous"
            >
              <AddIcon />
            </IconButton>
          </div>
          <div className="chosen-product-price-delete-section">
            <Typography
              className="chosen-product-price"
              variant="subtitle1"
              color="textSecondary"
            >
              {"£" + data.product.price * data.quantity}
            </Typography>

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
      </Card>
    </>
  );
};
ChosenProducts.propTypes = {
  data: PropTypes.object,
  prop: PropTypes.object
};
export default ChosenProducts;
