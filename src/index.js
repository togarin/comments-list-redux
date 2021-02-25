import React from "react";
import ReactDOM from "react-dom";
import App from "../src/Containers/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { Reducers } from "./reducers";

const Store = createStore(Reducers);

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
