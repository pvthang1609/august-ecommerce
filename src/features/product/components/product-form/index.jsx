import React from "react";
import { FastField, Form, Formik } from "formik";
import SelectField from "components/custom-field/select-field";
import InputField from "components/custom-field/input-field";

const initialValues = {
  size: "",
  amount: "",
};

export default function ProductForm({ info, onSizeChange }) {
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
            <FastField
              name="size"
              component={SelectField}
              info={info}
              handleChange={(e) => onSizeChange(e.currentTarget.value)}
            />
            <FastField name="amount" component={InputField} />
            <div>
              <button type="submit">Thêm vào giỏ</button>
              <button>Thanh toán</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
