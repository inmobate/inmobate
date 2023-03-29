import "./main.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-jkdom0hu2zoe2dm8.us.auth0.com"
      clientId="jdILASD5sHvuzEUIS0pI1i0kyrRToZDV"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </StrictMode>
);
