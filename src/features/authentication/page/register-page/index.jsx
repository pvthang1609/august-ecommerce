import { Formik, FastField, Form } from "formik";
import React from "react";
import { registerSchema } from "app/yup.validation";
import InputField from "features/authentication/components/custom-field/input-field";
import "./register-page.scss";
import { useDispatch, useSelector } from "react-redux";
import { register } from "actions/authAction";
import { useHistory } from "react-router";

const initValue = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector((state) => state.authentication);

  const handleSubmit = (value) => {
    const { name, email, password } = value;
    dispatch(register({ name: name, email: email, password: password }));
    history.push("/auth/login");
  };
  return (
    <div className="register-page">
      <div className="register-page__header">
        <h2>Wellcome to August Store</h2>
        <p>
          Đăng kí tài khoản để nhận được thông tin và những ưu đãi mới nhất.
        </p>
      </div>
      <Formik
        initialValues={initValue}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form>
              <div className="register-page__main">
                <FastField
                  name="name"
                  label="tên"
                  type="text"
                  component={InputField}
                  icon="fa-user"
                  placeholder="John"
                />
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
                  label="mật khẩu"
                  type="password"
                  component={InputField}
                  icon="fa-lock"
                  placeholder="********"
                />
                <FastField
                  name="passwordConfirm"
                  label="xác nhận mật khẩu"
                  type="password"
                  component={InputField}
                  icon="fa-lock"
                  placeholder="********"
                />
              </div>
              <div className="register-page__button">
                <button className="btn btn--register" type="submit">
                  Đăng kí
                  {loading.register && (
                    <i className="fa fa-spinner" aria-hidden="true"></i>
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default RegisterPage;
