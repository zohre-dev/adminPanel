import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./authInitialState";
import { RootState } from "../../store/store";
import { USER_INFO } from "../../constants/localStorageKeys";
import { IInitialState } from "./authSliceType";

// action = {
//             payload = {
//             name: result.data?.user.name,
//             token: result.data?.token,
//             rememberChecked: rememberChecked,
//           }
// }

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;

      if (action.payload.rememberChecked) {
        console.log("hi localstorage");
        localStorage.setItem(
          USER_INFO,
          JSON.stringify({
            userName: action.payload.name,
            userToken: action.payload.token,
          })
        );
      } else {
        console.log("hi session");
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
export default authSlice.reducer;
