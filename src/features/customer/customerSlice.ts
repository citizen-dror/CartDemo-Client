import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {CustomerState} from '../../types';

const initialState: CustomerState = {
    firstName: "",
    lastName: "",
    address: "",
    email: ""
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        updateCustomer: (state, action: PayloadAction<Partial<CustomerState>>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { updateCustomer } = customerSlice.actions;
export default customerSlice.reducer;