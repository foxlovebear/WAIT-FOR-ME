import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { storesFetch } from "./redux/storesSlice";
import { commentFetch } from "./redux/commentSlice";

store.dispatch(storesFetch());
store.dispatch(commentFetch());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
