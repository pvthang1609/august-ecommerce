import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "features/cart/cartSlice";
import notificationReducer from "features/notification/notificationSlice";
import authReducer from "features/authentication/authSlice";
import invoiceReducer from "features/checkout/page/invoiceSlide";
import productReducer from "features/product/productSlice";
import ratingReducer from "features/rating/ratingSlice";

const rootReducer = {
  cart: cartReducer,
  notification: notificationReducer,
  authentication: authReducer,
  invoice: invoiceReducer,
  product: productReducer,
  rating: ratingReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
