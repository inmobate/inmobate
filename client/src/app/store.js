import { configureStore, combineReducers } from "@reduxjs/toolkit";

/* api */
import { experimental } from "./api/experimental.js";

import { propertiesId } from "./api/propertiesId.js";

/* slices(global states) */
import { propertyToAdd } from "./slices/propertyToAdd/index.js";

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
