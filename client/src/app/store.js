import { configureStore, combineReducers } from "@reduxjs/toolkit";

/* api */
import { properties } from "./api/properties.js";

/* slices(global states) */
import { propertyToAdd } from "./slices/propertyToAdd/index.js";

export default configureStore({
  reducer: {
    [properties.reducerPath]: properties.reducer,
    propertyToAdd: propertyToAdd.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(properties.middleware),
});
