import { createSlice } from "@reduxjs/toolkit";

const initCart = {
  listCart: [],
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
          state.listCart[action.payload.index].quantity + 1;
      }
      if (action.payload.type === "decrement") {
        state.listCart[action.payload.index].quantity =
          state.listCart[action.payload.index].quantity - 1;
      }
    },
    remove_cart: (state, action) => {
      state.listCart.splice(action.payload, 1);
    },
    fail_cart: (state, action) => {
      state.fail = action.payload;
    },
  },
});
const { actions, reducer } = cartSlice;

export const { add_cart, edit_cart, remove_cart, fail_cart } = actions;

export default reducer;
