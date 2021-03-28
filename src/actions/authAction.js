import userApi from "api/userApi";
import { notificationSuccess, notificationFail } from "./notificationAction";

import {
  user_login_request,
  user_login_success,
  user_login_fail,
  user_register_request,
  user_register_success,
  user_register_fail,
} from "features/authentication/authSlice";

export const login = (data) => async (dispatch) => {
  dispatch(user_login_request());
  try {
    const response = await userApi.login(data);
    const { token } = response;
    dispatch(user_login_success({ user: response.infoUser, token: token }));
    dispatch(
      notificationSuccess(
        `Xin chào ${response.infoUser.name}, bạn đã đăng nhập thành công`
      )
    );
    localStorage.setItem("user", JSON.stringify(response.infoUser));
    localStorage.setItem("auth-token", token);
  } catch (error) {
    const message = error.response.data.error;
    dispatch(notificationFail(message));
    dispatch(user_login_fail());
  }
};

export const logout = () => {
  localStorage.clear();
};

export const register = (data) => async (dispatch) => {
  dispatch(user_register_request());
  try {
    const response = await userApi.register(data);
    dispatch(user_register_success());
    dispatch(notificationSuccess(response.message));
  } catch (error) {
    const message = error.response.data.error;
    dispatch(notificationFail(message));
    dispatch(user_register_fail());
  }
};
