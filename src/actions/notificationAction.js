import {
  add_notification,
  remove_notification,
} from "features/notification/notificationSlice";

const timeOut = 2500;

export const notificationSuccess = (message) => (dispatch) => {
  dispatch(
    add_notification({
      status: "success",
      title: `Tin nhắn hệ thống: ${message}`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, timeOut);
};
export const notificationFail = (message) => (dispatch) => {
  dispatch(
    add_notification({
      status: "fail",
      title: `Oh đã có lỗi: ${message}`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, timeOut);
};

//
export const notificationAddCart = (name) => (dispatch) => {
  dispatch(
    add_notification({
      status: "success",
      title: `Bạn đã thêm ${name} vào giỏ hàng`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, timeOut);
};

export const notificationSuccessLogin = (name) => (dispatch) => {
  dispatch(
    add_notification({
      status: "success",
      title: `Xin chào ${name}, bạn đã đăng nhập thành công.!`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, timeOut);
};

export const notificationSuccessInvoice = (id_invoice) => (dispatch) => {
  dispatch(
    add_notification({
      status: "success",
      title: `Đơn hàng #${id_invoice} đã được tạo thành công! vui lòng để ý điện thoại chúng tôi sẽ liên hệ sớm với bạn`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, timeOut);
};
