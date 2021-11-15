import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Route.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";
import { storesFetch } from "./redux/storesSlice";
import { commentFetch } from "./redux/commentSlice";
import { dataFetch } from "./redux/dataSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

store.dispatch(storesFetch());
store.dispatch(commentFetch());
store.dispatch(dataFetch());
window.addEventListener("load", () => {
  store.dispatch(dataFetch()); //crud完從最外層重整才會重新fetch
});

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById("root")
);
