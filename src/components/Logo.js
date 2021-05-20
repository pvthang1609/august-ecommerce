import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import LogoImg from "assets/image/Logo.svg";

Logo.propTypes = {
  size: PropTypes.number,
};

function Logo() {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img src={LogoImg} alt="" className="w-8" />
      <span className="text-4xl hidden xl:inline">August</span>
    </Link>
  );
}

export default Logo;
