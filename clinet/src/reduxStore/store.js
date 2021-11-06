import { configureStore } from "@reduxjs/toolkit";
import storseReducer from "./storesSlice";

export default configureStore({
  reducer: {
    stores: storseReducer,
  },
});
