import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* slices(global states) */
/* api */
import { experimental } from "./api/experimental.js";

import { propertiesId } from "./api/propertiesId.js";

export default configureStore({
  reducer: {
    [experimental.reducerPath]: experimental.reducer,
    [propertiesId.reducerPath]: propertiesId.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      experimental.middleware,
      propertiesId.middleware
    ),
});
