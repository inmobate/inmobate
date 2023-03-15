import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* slices(global states) */
/* api */
import { experimental } from "./api/experimental.js";

export default configureStore({
  reducer: {
    [experimental.reducerPath]: experimental.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(experimental.middleware),
});
