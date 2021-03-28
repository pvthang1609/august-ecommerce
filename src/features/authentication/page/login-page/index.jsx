import React from "react";
import { Formik, Form, FastField } from "formik";
import loginImg from "assets/image/login/login.svg";
import { SigninSchema } from "app/yup.validation";

import "./login-page.scss";
import { Link } from "react-router-dom";
import InputField from "features/authentication/components/custom-field/input-field";

import { login } from "actions/authAction";
import { useDispatch } from "react-redux";

const initValue = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const dispatch = useDispatch();

  return (
    <section className="grid wide">
      <div className="row">
        <div className="col l-7">
          <img src={loginImg} alt="login" />
        </div>
        <div className="col l-5 login-form">
          <div className="login-form__header">
            <h2 className="login-form__header--heading">Đăng nhập.</h2>
            <p className="login-form__header--greeting">
              Chào mừng bạn đến với August Store.
            </p>
            <p className="login-form__header--title">
              Vui lòng đăng nhập hoặc<span> </span>
              <Link className="login-form__header--link" to="/auth/register">
                đăng kí
              </Link>{" "}
              nếu bạn chưa có tài khoản.
            </p>
          </div>
          <Formik
            initialValues={initValue}
            validationSchema={SigninSchema}
            onSubmit={async (value) => {
              await dispatch(login(value.email, value.password));
            }}
          >
            {() => {
              return (
                <Form>
                  <FastField
                    name="email"
                    label="email"
                    type="text"
                    component={InputField}
                    icon={<i className="fa fa-envelope" aria-hidden="true"></i>}
                    placeholder="johndoe@gmail.com"
                  />
                  <FastField
                    name="password"
                    label="password"
                    type="password"
                    component={InputField}
                    icon={
                      <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    }
                    placeholder="********"
                  />
                  <button className="btn btn--signin" type="submit">
                    Đăng nhập
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div className="other-signin">
            <p>or</p>
            <div className="group-btn">
              <button className="btn btn--fb">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </button>
              <button className="btn btn--gg">
                <i className="fa fa-google" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
