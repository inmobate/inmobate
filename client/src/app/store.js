import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* api */
import { properties } from "./api/properties.js";

/* slices(global states) */
import { filterCombine } from "./slices/filterCombine";

import { propertyToAdd } from "./slices/propertyToAdd";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  propertyToAdd: propertyToAdd.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: {
    persistedReducer,
    [properties.reducerPath]: properties.reducer,
    filterCombine: filterCombine.reducer,
    propertyToAdd: propertyToAdd.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      properties.middleware
    ),
});
