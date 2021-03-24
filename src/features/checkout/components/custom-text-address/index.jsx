import React, { useState } from "react";
import PropTypes from "prop-types";
import "./custom-text-address.scss";

CustomTextAddress.propTypes = {
  form: PropTypes.object,
  field: PropTypes.object,
  display: PropTypes.string,
  icon: PropTypes.string,
};

function CustomTextAddress(props) {
  const { display, icon, field, form } = props;
  const { name } = field;
  const { errors, touched } = form;
  const [isForcus, setIsForcus] = useState(false);
  const handleFocus = () => {
    setIsForcus(true);
  };
  const handleBlur = () => {
    setIsForcus(false);
    form.setFieldTouched(name, true);
  };
  const isError =
    (errors.detail ? eval(`errors.${name}`) : errors[name]) &&
    (touched.detail ? eval(`touched.${name}`) : touched[name]);

  return (
    <div className="custom-text-address">
      <div
        className="custom-text-address__content"
        style={
          isForcus
            ? { borderColor: "#f55d5c" }
            : isError
            ? { borderColor: " #C00504" }
            : null
        }
      >
        <i className={`fa ${icon}`} aria-hidden="true"></i>
        <input
          type="text"
          placeholder={display}
          onFocus={handleFocus}
          {...field}
          onBlur={handleBlur}
        />
      </div>
      {isError && (
        <div className="custom-text-address__error">
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          {eval(`errors.${name}`)}
        </div>
      )}
    </div>
  );
}

export default CustomTextAddress;
