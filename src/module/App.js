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
    <div>
      {/* <Header /> */}
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

function Loading({ error }) {
  if (error) {
    <div>error</div>;
  } else {
    return <LinearProgress color="secondary" />;
  }
}

const SignIn = Loadable({
  loader: () => import("../module/authentication/components/SignIn"),
  loading: Loading
});
const Logout = Loadable({
  loader: () => import("../module/authentication/components/Logout"),
  loading: Loading
});
const FavouriteProducts = Loadable({
  loader: () => import("../module/product/components/FavouriteProducts"),
  loading: Loading
});

const DefaultContainer = () => (
  <div>
    <Header currentPath={history.location.pathname} />
    <Router history={history}>
      <Switch>
        {/* <Route exact path="/" component={ProductListContainer} /> */}
        <Route exact path="/" component={Products} />
        <Route path="/logout" component={Logout} />
        <Route path="/favourite" component={FavouriteProducts} />
        {/* <Route component={DefaultContainer} /> */}
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
