import userApi from "api/userApi";
import {
  notificationSuccessLogin,
  notificationFailLogin,
} from "actions/notificationAction";

import { user_request, user_success } from "features/authentication/userSlice";

export const login = (email, password) => async (dispatch) => {
  dispatch(user_request());
  try {
    const request = await userApi.login({ email: email, password: password });
    const { token } = request;

    dispatch(user_success(request));
    if (request.message) {
      throw new Error(request.message);
    }
    dispatch(notificationSuccessLogin(request.infoUser.name));
    localStorage.setItem("info-user", JSON.stringify(request.infoUser));
    localStorage.setItem("auth-token", token);
  } catch (err) {
    dispatch(notificationFailLogin(err.message));
  }
};

export const logout = () => {
  localStorage.clear();
};
