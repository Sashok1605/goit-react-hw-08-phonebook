import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { authReducer } from "./auth";
import { reducerContacts } from './contacts/contactsReducer';


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: { 
    auth : persistReducer(authPersistConfig, authReducer),
    contacts: reducerContacts },

  middleware,
  devTools: process.env.NODE_ENV === 'development',
  // devTools: process.env.NODE_ENV !== "production", // => true || false
});

export const persistor = persistStore(store);