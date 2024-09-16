import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./authInitialState";
import { RootState } from "../../store/store";
import { USER_INFO } from "../../constants/localStorageKeys";
import { IInitialState } from "./authSliceType";

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      // state.rememberChecked = action.payload.rememberChecked;

      if (action.payload.rememberChecked) {
        localStorage.setItem(
          USER_INFO,
          JSON.stringify({
            userName: action.payload.name,
            userToken: action.payload.token,
          })
        );
      } else {
        sessionStorage.setItem(
          USER_INFO,
          JSON.stringify({
            userName: action.payload.name,
            userToken: action.payload.token,
          })
        );
      }
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectUsername = (state: RootState) => state.auth.name;
export const selectUserToken = (state: RootState) => state.auth.token;
// export const selectRememberMe = (state: RootState) =>
//   state.auth.rememberChecked;
export default authSlice.reducer;
