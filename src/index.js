import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("app")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
