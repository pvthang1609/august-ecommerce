import React, { useState } from "react";
import PropTypes from "prop-types";
import "./input-field.scss";

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
  id: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { label, type, icon, placeholder, field, form, disabled } = props;
  const { values } = form;
  const { name } = field;
  const { errors, touched } = form;

  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = (e) => {
    field.onBlur(e);
    setIsFocus(false);
  };

  const isSuccess = !(touched[name] && errors[name]) && values[name] !== "";
  const isError = touched[name] && errors[name];

  return (
    <div
      className="input-field"
      style={isFocus ? { borderBottom: "0.2rem solid #2196ee" } : null}
    >
      <div className="input-field__icon">
        <i className={`fa ${icon}`} aria-hidden="true"></i>
      </div>
      <div className="input-field__content">
        <div className="content-header">
          <div
            className="label"
            style={isFocus || isSuccess ? { color: "#2196ee" } : null}
          >
            {label}
          </div>
          {isError && <div className="error-message">{errors[name]}</div>}
        </div>
        <div className="content-main">
          <div className="input">
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              onFocus={handleFocus}
              onBlur={(e) => handleBlur(e)}
              disabled={disabled}
            />
          </div>
          <div className="status-icon">
            {isError && (
              <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            )}
            {isSuccess && (
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputField;
