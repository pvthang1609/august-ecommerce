import { createSlice } from "@reduxjs/toolkit";

const initAuth = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "",
  token: localStorage.getItem("auth-token")
    ? localStorage.getItem("auth-token")
    : "",
  loading: {
    login: false,
    register: false,
  },
};

const authSlice = createSlice({
  initialState: initAuth,
  name: "auth",
  reducers: {
    //login
    user_login_request: (state) => {
      state.loading.login = true;
    },
    user_login_success: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading.login = false;
    },
    user_login_fail: (state) => {
      state.loading.login = false;
    },
    //register
    user_register_request: (state) => {
      state.loading.register = true;
    },
    user_register_success: (state) => {
      state.loading.register = false;
    },
    user_register_fail: (state) => {
      state.loading.register = false;
    },
  },
});
const { actions, reducer } = authSlice;

export const {
  user_login_request,
  user_login_success,
  user_login_fail,
  user_register_request,
  user_register_success,
  user_register_fail,
} = actions;

export default reducer;
