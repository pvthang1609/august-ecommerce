import { createSlice } from "@reduxjs/toolkit";

const initCart = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    add_cart: (state, action) => {
      state.cart.push(action.payload);
    },
    edit_cart: (state, action) => {
      if (action.payload.type === "increment") {
        state.cart[action.payload.index].quantity =
          state.cart[action.payload.index].quantity + 1;
      }
      if (action.payload.type === "decrement") {
        state.cart[action.payload.index].quantity =
          state.cart[action.payload.index].quantity - 1;
      }
    },
    remove_cart: (state, action) => {
      state.cart.splice(action.payload, 1);
    },
    fail_cart: (state, action) => {
      state.fail = action.payload;
    },
  },
});
const { actions, reducer } = cartSlice;

export const { add_cart, edit_cart, remove_cart, fail_cart } = actions;

export default reducer;
