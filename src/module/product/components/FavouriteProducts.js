import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const FavouriteProducts = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className="">xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className="">xs=6</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className="">xs=3</Paper>
      </Grid>
    </Grid>
  );
};

export default FavouriteProducts;
