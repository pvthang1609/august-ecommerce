import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./logo.scss";

Logo.propTypes = {
  size: PropTypes.number,
};

function Logo(props) {
  const { size } = props;
  return (
    <div className="logo" style={{ fontSize: `${size}rem` }}>
      <Link to="/">
        August <span>.</span>
      </Link>
    </div>
  );
}

export default Logo;
