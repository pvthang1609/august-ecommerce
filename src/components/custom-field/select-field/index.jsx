import React from "react";

export default function SelectField(props) {
  const { field, form, info, handleChange } = props;
  const { onChange, value } = field;

  return (
    <div>
      <h3>Size</h3>
      <select
        {...field}
        onChange={(e) => {
          onChange(e);
          handleChange(e);
        }}
      >
        <option value="" selected disabled hidden>
          Chọn size
        </option>
        {info.map((item, index) => {
          return (
            <option
              key={index}
              value={item.size}
              disabled={item.inventory === 0}
            >
              {item.size}
            </option>
          );
        })}
      </select>
    </div>
  );
}
