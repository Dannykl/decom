import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LinearProgress from "@material-ui/core/LinearProgress";
import Products from "./product/containers/ProductsPage";
import { history } from "../utils/history";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </>
  );
}

function Loading({ error }) {
  if (error) {
    <div>error</div>;
  } else {
    return <LinearProgress color="secondary" />;
  }
}

const SignUp = Loadable({
  loader: () => import("../module/registration/SignUp"),
  loading: Loading
});
const SignIn = Loadable({
  loader: () => import("../module/authentication/components/SignIn"),
  loading: Loading
});
const Logout = Loadable({
  loader: () => import("../module/authentication/components/Logout"),
  loading: Loading
});
const FavouriteContainer = Loadable({
  loader: () => import("../module/favourite/containers/FavouriteContainer"),
  loading: Loading
});
const CartContainer = Loadable({
  loader: () => import("../module/cart/containers/CartContainer"),
  loading: Loading
});
const ProductShowContainer = Loadable({
  loader: () => import("../module/product/containers/ProductShowContainer"),
  loading: Loading
});

const DefaultContainer = () => (
  <div>
    <Header currentPath={history.location.pathname} />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/products/:id" component={ProductShowContainer} />
        <Route path="/favourite" component={FavouriteContainer} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/logout" component={Logout} />
        {/* <Route component={DefaultContainer} /> */}
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
