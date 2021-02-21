import { createSlice } from "@reduxjs/toolkit";

const initCart = {
  listCart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "listCart",
  initialState: initCart,
  reducers: {
    add_cart: (state, action) => {
      state.listCart.push(action.payload);
    },
    edit_cart: (state, action) => {
      if (action.payload.type === "increment") {
        state.listCart[action.payload.index].quantity =
          state.listCart[action.payload.index].quantity +
          action.payload.quantity;
      } else {
        state.listCart[action.payload.index].quantity =
          state.listCart[action.payload.index].quantity -
          action.payload.quantity;
      }
    },
    remove_cart: (state, action) => {
      state.listCart.splice(action.payload, 1);
    },
    remove_all_cart: (state) => {
      state.listCart = [];
    },
  },
});
const { actions, reducer } = cartSlice;

export const { add_cart, edit_cart, remove_cart, remove_all_cart } = actions;

export default reducer;
