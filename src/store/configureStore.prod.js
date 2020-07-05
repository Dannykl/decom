import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./index";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "cartAndFavourite",
  storage: storage,
  whitelist: ["cartProducts", "favouriteProducts", "authentication"]
};
const presistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const store = createStore(
    presistedReducer,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
  const persistor = persistStore(store);
  return { persistor, store };
}
