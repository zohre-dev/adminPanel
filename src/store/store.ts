import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feachers/auth/authSlice";
import { authApi } from "../services/authAPi/authApi";
import customerReducer from "../feachers/customer/customerSlice";
import { customerApi } from "../services/customerApi/customerApi";

const appStore = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    customer: customerReducer,
    [customerApi.reducerPath]: customerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(customerApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export const patcher = appStore.dispatch;
export type AppDispatch = typeof patcher;

export default appStore;
