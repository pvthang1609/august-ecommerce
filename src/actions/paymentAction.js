import invoiceApi from "api/invoiceApi";

import {
  edit_invoice,
  remove_invoice,
} from "features/checkout/page/invoiceSlide";
import { notificationSuccess, notificationFail } from "./notificationAction";

export const addInvoiceToServer = () => async (dispatch, getState) => {
  const {
    invoice: { invoice },
  } = getState();
  try {
    const response = await invoiceApi.post(invoice);
    dispatch(notificationSuccess(`Đơn hàng ${response.no} đã được tạo`));
  } catch (err) {
    dispatch(notificationFail(err.message));
  }
};
export const editToInvoice = (data) => async (dispatch) => {
  dispatch(edit_invoice(data));
};
export const removeToInvoice = () => async (dispatch) => {
  dispatch(remove_invoice());
};
