import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./customerInitialState";
import { IInitialState } from "./customerSliceType";
import { RootState } from "../../store/store";

const customerSlice = createSlice({
  name: "customerSlice",
  initialState,
  reducers: {
    setCustomer: (state, action: PayloadAction<IInitialState>) => {
      (state.id = action.payload.id),
        (state.firstName = action.payload.firstName),
        (state.lastName = action.payload.lastName),
        (state.day = action.payload.day),
        (state.month = action.payload.month),
        (state.year = action.payload.year),
        (state.phoneNumber = action.payload.phoneNumber),
        (state.email = action.payload.email);
    },
  },
});

export default customerSlice.reducer;
export const selectCustomer = (state: RootState) => state.customer;
