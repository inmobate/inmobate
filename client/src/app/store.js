import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* slices(global states) */
import { propertyToAdd } from "./slices/propertyToAdd/index.js";
/* api */
import { experimental } from "./api/experimental.js";

import { propertiesId } from "./api/propertiesId.js";

export default configureStore({
  reducer: {
    [experimental.reducerPath]: experimental.reducer,
    [propertiesId.reducerPath]: propertiesId.reducer,
    propertyToAdd: propertyToAdd.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      experimental.middleware,
      propertiesId.middleware
    ),
});
