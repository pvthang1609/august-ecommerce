import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object,
};

import "./input-field.scss";

export default function InputField({
  label,
  type,
  icon,
  placeholder,
  field,
  form,
}) {
  const { name } = field;
  const { errors, touched } = form;
  const prop = errors[name] && touched[name] ? true : false;

  const [inputType, setInputType] = useState(type);

  const changeTypes = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  return (
    <div className="inputField">
      <div className="inputField__label">
        <p>{label}</p>
        <CSSTransition
          in={prop}
          timeout={300}
          mountOnEnter
          unmountOnExit
          classNames="text"
        >
          <p className="text-error">
            {errors[name]}
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          </p>
        </CSSTransition>
        {/* ) : null} */}
      </div>
      <div className="inputField__input">
        {icon}
        <input {...field} type={inputType} placeholder={placeholder} />
        {type === "password" ? (
          <button className="changeTypes__btn" onClick={changeTypes}>
            {inputType === "password" ? (
              <i className="fa fa-eye" aria-hidden="true"></i>
            ) : (
              <i className="fa fa-eye-slash" aria-hidden="true"></i>
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
