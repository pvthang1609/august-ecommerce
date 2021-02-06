import { configureStore } from "@reduxjs/toolkit";
import productMainReducer from "features/product/page/main-page/mainProductSlice";
import detailProductReducer from "features/product/page/product-page/detailProductSlice";
import cartReducer from "features/payment/page/cart/cartSlice";
import notificationReducer from "features/notification/notificationSlice";
import filterProductReducer from "features/product/page/filter-page/filterProductSlice";
import userReducer from "features/authentication/userSlice";
import invoiceReducer from "features/payment/page/invoiceSlide";

const rootReducer = {
  listProductsMain: productMainReducer,
  filterProduct: filterProductReducer,
  detailProduct: detailProductReducer,
  cart: cartReducer,
  notification: notificationReducer,
  authentication: userReducer,
  invoice: invoiceReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
