import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./authInitialState";
import { RootState } from "../../store/store";

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      localStorage.setItem("userToken", action.payload);
      state.userName = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectUsername = (state: RootState) => state.auth.userName;
export default authSlice.reducer;
