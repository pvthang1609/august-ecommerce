import React from "react";
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
  const handleChange = () => {
    console.log("isRun");
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(props) => {
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
              <button type="submit">Thêm vào giỏ</button>
              <button>Thanh toán</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
