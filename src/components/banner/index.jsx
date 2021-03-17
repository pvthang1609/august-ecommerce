import React from "react";
// import PropTypes from "prop-types";
import "./banner.scss";
import bannerNew from "assets/image/banner/banner-new.png";
import { Link } from "react-router-dom";

Banner.propTypes = {};

function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__name">Pegasus 30</div>
        <div className="banner__frames"></div>
        <div className="banner__content">
          <h2>BRAVE NEW WORLD</h2>
          <p>
            Take on anything the season throws your way in these functional
            styles.
          </p>
          <Link to="#">Xem thêm</Link>
        </div>
        <div className="banner__product">
          <img className="product__image" src={bannerNew} alt="bannerNew" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
