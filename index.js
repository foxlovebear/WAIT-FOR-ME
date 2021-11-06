//import modual 的obj
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { storesFetch } from "./redux/storesSlice";

store.dispatch(storesFetch());

//babel會把element轉譯成物件 which type:h1,props:children: "HI"
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
