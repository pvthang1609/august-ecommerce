import { createSlice } from "@reduxjs/toolkit";

const initOrder = {
  orders: "",
  order: "",
  loading: {
    create: false,
    edit: false,
    remove: false,
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState: initOrder,
  reducers: {
    order_create_request: (state) => {
      state.loading.create = true;
    },
    order_create_success: (state) => {
      state.loading.create = false;
    },
    order_create_fail: (state) => {
      state.loading.create = false;
    },
    order_edit_request: (state, action) => {
      const payload = action.payload;
      state.invoice = { ...state.invoice, ...payload };
      state.loading.edit = true;
    },
    order_edit_success: (state) => {
      state.loading.edit = false;
    },
    order_edit_fail: (state) => {
      state.loading.edit = false;
    },
    order_remove_request: (state) => {
      state.loading.remove = true;
    },
    order_remove_success: (state) => {
      state.loading.remove = false;
    },
    order_remove_fail: (state) => {
      state.loading.remove = false;
    },
    clearState: (state) => {
      state.order = "";
    },
  },
});
const { actions, reducer } = orderSlice;

export const {
  order_create_request,
  order_create_success,
  order_create_fail,
  order_edit_request,
  order_edit_success,
  order_edit_fail,
  order_remove_request,
  order_remove_success,
  order_remove_fail,
  clearState,
} = actions;

export default reducer;
