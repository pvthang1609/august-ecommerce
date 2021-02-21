import React from "react";
// import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./logo.scss";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        August <span>.</span>
      </Link>
    </div>
  );
}

export default Logo;
