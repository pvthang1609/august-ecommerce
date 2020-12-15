import React from "react";

export default function InputField(props) {
  const { field, form } = props;
  return (
    <div>
      <h3 className="product-form__tittle">Số lượng:</h3>
      <input
        name="amount"
        type="number"
        min={1}
        max={5}
        {...field}
        placeholder="Số lượng"
        className="product-form__number-input"
      />
    </div>
  );
}
