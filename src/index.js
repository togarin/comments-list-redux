import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Reducers } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import logger from "redux-logger";

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
  },
  Reducers
);

const store = createStore(persistedReducer, applyMiddleware(logger));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
