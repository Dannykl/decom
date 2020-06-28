import React from "react";
import PropTypes from "prop-types";
import "../products.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import LazyLoad from "react-lazyload";
// import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const ProductCard = ({ data, selectedProduct, isFavourite, favourClicked }) => {
  return (
    <div className="product-card-container">
      {/* <LazyLoad
        key={data.id}
        height={100}
        offset={-100}
        placeholder={
          <CircularProgress style={{ marginLeft: "50%", marginTop: "10%" }} />
        }
      > */}
      <Card>
        <CardMedia
          onClick={() => selectedProduct(data)}
          className="image"
          image={data.image}
          title={data.name}
        />
        <CardContent onClick={() => selectedProduct(data)}>
          <Typography
            style={{ textAlign: "center" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {"£" + data.price}
          </Typography>
          <Typography
            style={{
              textAlign: "center"
            }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {data.description} {data.name}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            paddingTop: "0%",
            width: "100%",
            justifyContent: "space-between"
          }}
          disableSpacing
        >
          <Button
            style={{
              color: "grey",
              borderColor: "grey"
            }}
            type="submit"
            variant="outlined"
            id="login-button"
            color="primary"
            onClick={() => selectedProduct(data)}
          >
            DETAILS
          </Button>

          <IconButton
            aria-label="add to favorites"
            className="favorite-icon"
            onClick={() => favourClicked(data)}
            style={{
              color: isFavourite ? "red" : "grey"
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/* </LazyLoad> */}
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
  selectedProduct: PropTypes.func,
  favourClicked: PropTypes.func,
  addedIntoCart: PropTypes.func,
  isFavourite: PropTypes.bool,
  isItInCart: PropTypes.bool
};
export default ProductCard;
