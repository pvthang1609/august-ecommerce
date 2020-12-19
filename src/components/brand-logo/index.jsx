import React from "react";
import "./brand-logo.scss";
import PropTypes from "prop-types";

BrandLogo.propTypes = {
  brandList: PropTypes.array.isRequired,
};

export default function BrandLogo({ brandList }) {
  return (
    <div className="brand-logo">
      {brandList.map((brand, index) => {
        return (
          <div className="brand-logo__item" key={index}>
            <img src={brand} alt="logo" />
          </div>
        );
      })}
    </div>
  );
}
