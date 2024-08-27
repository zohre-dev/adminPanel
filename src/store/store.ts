import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feachers/auth/authSlice";
import { authApi } from "../services/authAPi/authApi";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export const patcher = appStore.dispatch;
export type AppDispatch = typeof patcher;

export default appStore;
