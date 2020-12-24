import React from "react";
import { Formik, Form, FastField } from "formik";
import login from "assets/image/login/login.svg";

import "./login-page.scss";
import { Link } from "react-router-dom";

const initValue = {
  email: "",
  password: "",
};

export default function LoginPage() {
  return (
    <section className="login-page">
      <div className="container login-page__inner">
        <div className="login__banner">
          <img src={login} alt="login" />
        </div>
        <div className="login__form">
          <div className="login__form--header">
            <h2>Đăng nhập.</h2>
            <p>Chào mừng bạn đến với August Store</p>
            <p>
              Vui lòng đăng nhập hoặc
              <Link to="/auth/register">đăng kí</Link> nếu bạn chưa có tài
              khoản.
            </p>
          </div>
          <Formik initialValues={initValue}>
            {() => {
              return (
                <Form>
                  <FastField name="email" />
                  <FastField name="password" type="password" />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
}
