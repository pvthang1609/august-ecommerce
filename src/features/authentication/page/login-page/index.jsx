import React from "react";
import { Formik, Form, FastField } from "formik";
import { SigninSchema } from "app/yup.validation";

import "./login-page.scss";
import InputField from "features/authentication/components/custom-field/input-field";

import { login } from "actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const initValue = {
  email: "",
  password: "",
};

function LoginPage() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.authentication);

  const handleSubmit = (value) => {
    dispatch(login(value));
  };

  return (
    <div className="login-page">
      <div className="login-page__header">
        <h2>Wellcome to August Store</h2>
        <p>Vui lòng đăng nhập để thực hiện các thao tác mua hàng.</p>
      </div>
      <Formik
        initialValues={initValue}
        validationSchema={SigninSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form>
              <div className="login-page__main">
                <FastField
                  name="email"
                  label="email"
                  type="text"
                  component={InputField}
                  icon="fa-envelope"
                  placeholder="example@gmail.com"
                />
                <FastField
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  component={InputField}
                  icon="fa-lock"
                  placeholder="********"
                />
              </div>
              <div className="login-page__button">
                <button className="btn btn--login" type="submit">
                  Đăng nhập
                  {loading.login && (
                    <i className="fa fa-spinner" aria-hidden="true"></i>
                  )}
                </button>
              </div>
              <div className="login-page__other-method">
                <p>hoặc</p>
                <div>
                  <div className="logo logo--google">
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </div>
                  <div className="logo logo--facebook">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div className="logo logo--twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default LoginPage;
