import { configureStore, combineReducers } from "@reduxjs/toolkit";

/* api */
import { properties } from "./api/properties.js";

import { propertiesId } from "./api/propertiesId.js";

/* slices(global states) */
import { propertyToAdd } from "./slices/propertyToAdd/index.js";

export default configureStore({
  reducer: {
    [properties.reducerPath]: properties.reducer,
    [propertiesId.reducerPath]: propertiesId.reducer,
    propertyToAdd: propertyToAdd.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      properties.middleware,
      propertiesId.middleware
    ),
});
