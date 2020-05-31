import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LinearProgress from "@material-ui/core/LinearProgress";
import Products from "./product/ProductsPage";
import { history } from "../utils/history";
import Header from "./common/Header";

// function Loading({ error }) {
//   if (error) {
//     <div>error</div>;
//   } else {
//     return <LinearProgress color="secondary" />;
//   }
// }

// const ProductListContainer = Loadable({
//   loader: () => import("./landing/Landing"),
//   loading: Loading
// });

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Router history={history}>
        {/* <Router> */}
        <Switch>
          {/* <Route exact path="/" component={ProductListContainer} /> */}
          <Route exact path="/" component={Products} />
          {/* <Route component={DefaultContainer} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
