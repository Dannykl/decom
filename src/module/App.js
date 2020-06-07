import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LinearProgress from "@material-ui/core/LinearProgress";
import Products from "./product/components/ProductsPage";
import { history } from "../utils/history";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <div className="container-fluid">
      {/* <Header /> */}
      <Router history={history}>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
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

const DefaultContainer = () => (
  <div className="container-fluid">
    <Header currentPath={history.location.pathname} />
    <Router history={history}>
      {/* <Router> */}
      <Switch>
        {/* <Route exact path="/" component={ProductListContainer} /> */}
        <Route exact path="/" component={Products} />
        <Route path="/log-out" component={Logout} />
        {/* <Route component={DefaultContainer} /> */}
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
