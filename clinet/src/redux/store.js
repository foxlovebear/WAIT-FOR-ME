import { configureStore } from "@reduxjs/toolkit";
import storseReducer from "./storesSlice";
import commentReducer from "./commentSlice";
import dataSlice from "./dataSlice";

export default configureStore({
  reducer: {
    stores: storseReducer,
    comment: commentReducer,
    data: dataSlice,
  },
});
