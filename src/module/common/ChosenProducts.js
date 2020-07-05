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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "20px",
    width: "100%"
  },

  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const ChosenProducts = ({ data, prop }) => {
  const classes = useStyles();
  const theme = useTheme();
  // console.log("cart products ", prop);
  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          style={{ width: "15%" }}
          className={classes.cover}
          image={data.image}
          title="product image"
        />
        <div className={classes.controls} style={{ width: "100%" }}>
          <CardContent style={{ backgroundColor: "green", width: "50%" }}>
            <Typography>
              {data.description} {data.name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              brand
            </Typography>
          </CardContent>
          <div
            style={{
              backgroundColor: "yellow",
              width: "20%",
              display: "flex"
            }}
          >
            <IconButton
              onClick={() => prop.decreament()}
              disabled={prop.quantity < 2 ? true : false}
              aria-label="previous"
            >
              <RemoveIcon />
            </IconButton>
            <Typography
              style={{
                paddingTop: "4%"
              }}
              variant="subtitle1"
              color="textSecondary"
            >
              {prop.quantity}
            </Typography>

            <IconButton onClick={() => prop.increament()} aria-label="previous">
              <AddIcon />
            </IconButton>
          </div>
          <div
            style={{
              backgroundColor: "red",
              display: "flex"
            }}
          >
            <Typography
              style={{
                paddingTop: "2%",
                marginRight: "10%"
              }}
              variant="subtitle1"
              color="textSecondary"
            >
              {"£" + data.price * prop.quantity}
            </Typography>

            <Button
              onClick={() => prop.deleteProduct(data)}
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              style={{
                marginLeft: "5%"
              }}
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
  data: PropTypes.object
};
export default ChosenProducts;
