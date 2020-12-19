import React from "react";
import PropTypes from "prop-types";

InputField.propTypes = {
  field: PropTypes.object,
};

export default function InputField(props) {
  const { field } = props;
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
