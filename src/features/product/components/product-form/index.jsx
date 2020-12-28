import React from "react";

import PropTypes from "prop-types";

ProductForm.propTypes = {
  info: PropTypes.array,
  onSizeChange: PropTypes.func,
};

import { FastField, Form, Formik } from "formik";
import SelectField from "components/custom-field/select-field";
import InputField from "components/custom-field/input-field";

import "./product-form.scss";

export default function ProductForm({ info, onSizeChange }) {
  const initialValues = {
    code: info[0].code,
    size: "",
    amount: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => {
        return (
          <Form>
            <div className="product-form__group-input">
              <FastField
                name="size"
                component={SelectField}
                info={info}
                handleChange={(e) => onSizeChange(e.currentTarget.value)}
              />
              <FastField name="amount" component={InputField} />
            </div>
            <div className="product-form__group-btn">
              <button type="submit" className="btn btn--addCart">
                Thêm vào giỏ
              </button>
              <button className="btn btn--payNow">Thanh toán</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
