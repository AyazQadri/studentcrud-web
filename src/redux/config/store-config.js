import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from "./rootreducer-config";


// Persist your reducers
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
})