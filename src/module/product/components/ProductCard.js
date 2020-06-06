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
import ShareIcon from "@material-ui/icons/Share";
import LazyLoad from "react-lazyload";
import Spinner from "../../common/Spinner";

const ProductCard = ({ data, selectedProduct }) => {
  return (
    <div className="product-card-container">
      <LazyLoad
        key={data.id}
        height={100}
        offset={[-100, 100]}
        placeholder={<Spinner />}
      >
        <Card onClick={() => selectedProduct(data)}>
          <CardMedia>
            <img src={data.image} alt="face mask" className="image" />
          </CardMedia>
          <div className="product-card-bottom">
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.description} {data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {"£" + data.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className="product-card-icons">
              <IconButton
                aria-label="add to favorites"
                className="favorite-icon"
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share" className="share-icon">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </div>
        </Card>
      </LazyLoad>
    </div>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
  selectedProduct: PropTypes.func
};
export default ProductCard;
