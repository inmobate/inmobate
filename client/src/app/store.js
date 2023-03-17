import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
/* api */
import { properties } from "./api/properties.js";

/* slices(global states) */
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
    propertyToAdd: propertyToAdd.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(properties.middleware),
});
