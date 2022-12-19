import { configureStore } from "@reduxjs/toolkit";

import thunkMiddleware from "redux-thunk";

import { createStateSyncMiddleware } from "redux-state-sync";

import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

import authReducer from "./auth/authSlice";

const reduxStateSyncConfig = {
  blacklist: [],
};

const createPersistReducer = (key, aReducer) => {
  const persistConfig = {
    key: key,
    storage: storage,
    stateReconciler: autoMergeLevel2,
  };

  return persistReducer(persistConfig, aReducer);
};

const reducer = {
  auth: createPersistReducer("auth", authReducer),
};

const middleware = [
  thunkMiddleware,
  createStateSyncMiddleware(reduxStateSyncConfig),
];

export const store = configureStore({
  reducer: reducer,
  middleware: middleware,
});

export const persistor = persistStore(store);
