import { createSlice } from "@reduxjs/toolkit";

const initInvoice = {
  invoice: {},
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState: initInvoice,
  reducers: {
    edit_invoice: (state, action) => {
      const payload = action.payload;
      state.invoice = { ...state.invoice, ...payload };
    },
    remove_invoice: (state) => {
      state.invoice = {};
    },
  },
});
const { actions, reducer } = invoiceSlice;

export const { edit_invoice, remove_invoice } = actions;

export default reducer;
