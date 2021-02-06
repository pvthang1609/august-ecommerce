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
  const { display, icon, field } = props;
  const [isForcus, setIsForcus] = useState(false);
  const handleFocus = () => {
    setIsForcus(true);
  };
  const handleBlur = () => {
    setIsForcus(false);
  };
  return (
    <div
      className="custom-text-address"
      style={isForcus ? { borderColor: "#f55d5c" } : null}
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
  );
}

export default CustomTextAddress;
