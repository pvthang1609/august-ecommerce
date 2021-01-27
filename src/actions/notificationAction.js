import {
  add_notification,
  remove_notification,
} from "features/notification/notificationSlice";

export const notificationAddCart = (name) => (dispatch) => {
  dispatch(
    add_notification({
      status: "success",
      title: `Bạn đã thêm ${name} vào giỏ hàng`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, 5000);
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
  }, 5000);
};
export const notificationFailLogin = (message) => (dispatch) => {
  dispatch(
    add_notification({
      status: "fail",
      title: `Oh đã có lỗi: ${message}`,
    })
  );
  setTimeout(() => {
    dispatch(remove_notification(0));
  }, 5000);
};
