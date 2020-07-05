import { createStore, applyMiddleware, compose } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "./index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "cartAndFavourite",
  storage: storage,
  whitelist: ["cartProducts", "favouriteProducts","authentication"]
};
const presistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    presistedReducer,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
  const persistor = persistStore(store);
  return { persistor, store };
}

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
// import rootReducer from "./index";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default function configureStore(initialState) {
//   return createStore(
//     rootReducer,
//     initialState,
//     composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
//   );
// }
