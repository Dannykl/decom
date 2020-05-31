import React from "react";
import PropTypes from "prop-types";
import "./products.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const ProductCard = data => {
  console.log("data is ", data.data.image);
  return (
    <Card>
      <CardMedia>
        <img src={data.data.image} alt="face mask" className="image" />
      </CardMedia>
      <div className="product-card-bottom">
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.data.description} {data.data.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"£" + data.data.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className="product-card-icons">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object
};
export default ProductCard;
