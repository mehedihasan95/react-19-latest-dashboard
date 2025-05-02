import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import api from "./api/api";
import { authReducer } from "./slice/authSlice";
import { drawerReducer } from "./slice/drawerSlice";
import { filterReducer } from "./slice/filterSlice";
import { modalReducer } from "./slice/modalSlice";
import { notificationReducer } from "./slice/notificationSlice";
import { themeReducer } from "./slice/themeSlice";
import { errorMiddleware, successMiddleware } from "./utilities/middleware";

const persistConfig = {
  key: "HOTEL_RESERVATION",
  storage: localStorage,
  whitelist: ["auth"],
  version: 1,
  blacklist: [api.reducerPath],
};

const rootReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  modal: modalReducer,
  drawer: drawerReducer,
  filter: filterReducer,
  notification: notificationReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware, successMiddleware, errorMiddleware),
  devTools: import.meta.env.DEV,
});

export const persistor = persistStore(store);

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
