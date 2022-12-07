import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import { router } from "./router";

import { RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import LoadingPage from "./pages/loading_page/LoadingPage";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<LoadingPage />} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
