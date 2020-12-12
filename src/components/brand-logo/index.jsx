import React from "react";
import "./brand-logo.scss";

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
