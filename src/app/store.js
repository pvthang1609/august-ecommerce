import { configureStore } from "@reduxjs/toolkit";
import productMainReducer from "features/product/page/main-page/mainProductSlice";
import detailProductReducer from "features/product/page/product-page/detailProductSlice";
import cartReducer from "features/payment/page/cart/cartSlice";
import notificationReducer from "features/notification/notificationSlice";

const rootReducer = {
  listProductsMain: productMainReducer,
  detailProduct: detailProductReducer,
  cart: cartReducer,
  notification: notificationReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
