import React from "react";

export default function SelectField(props) {
  const { field, form, info, handleChange } = props;
  const { onChange, value } = field;

  // console.log(form.setFieldValue);
  const handlerCodeChange = (e) => {
    const keyFil = e.currentTarget.value;
    const arrFil = info.filter((item) => item.size == keyFil);
    console.log(arrFil[0].code);
    form.setFieldValue("code", arrFil[0].code, false);
  };

  return (
    <div>
      <h3 className="product-form__tittle">Kích cỡ:</h3>
      <select
        {...field}
        onChange={(e) => {
          onChange(e);
          handleChange(e);
          handlerCodeChange(e);
        }}
        className="product-form__select-input"
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
