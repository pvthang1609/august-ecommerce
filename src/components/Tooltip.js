import React from "react";
import PropTypes from "prop-types";

function Tooltip({ children }) {
  return (
    <div
      style={{
        background: "#6C6C6C",
        borderRadius: 5,
        padding: 5,
        fontSize: 12,
        color: "#FFF",
        width: "auto",
      }}
    >
      {children}
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.string,
};

export default Tooltip;
