import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer } from "./slice/authSlice";
import { themeReducer } from "./slice/themeSlice";
import { modalReducer } from "./slice/modalSlice";
import { drawerReducer } from "./slice/drawerSlice";
import { notificationReducer } from "./slice/notificationSlice";
import { errorMiddleware, successMiddleware } from "./utilities/middleware";
import api from "./api/api";
import localStorage from "redux-persist/lib/storage";

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

// Type-safe hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
