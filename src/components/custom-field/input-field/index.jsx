import React from "react";

export default function InputField(props) {
  const { field, form } = props;
  return (
    <div>
      <h3>Số lượng</h3>
      <input
        name="amount"
        type="number"
        min={1}
        max={5}
        {...field}
        placeholder="Số lượng"
      />
    </div>
  );
}
