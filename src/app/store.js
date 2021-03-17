import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "features/payment/page/cart/cartSlice";
import notificationReducer from "features/notification/notificationSlice";
import filterProductReducer from "features/product/page/filter-page/filterProductSlice";
import userReducer from "features/authentication/userSlice";
import invoiceReducer from "features/payment/page/invoiceSlide";
import productReducer from "features/product/productSlice";

const rootReducer = {
  filterProduct: filterProductReducer,
  cart: cartReducer,
  notification: notificationReducer,
  authentication: userReducer,
  invoice: invoiceReducer,
  product: productReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
