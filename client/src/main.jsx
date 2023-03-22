import "./main.css";

import React, { StrictMode } from "react";

import ReactDOM from "react-dom/client";

import store from "./app/store";

import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";

import { Provider } from "react-redux";

import { router } from "./router";

import { RouterProvider } from "react-router-dom";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
