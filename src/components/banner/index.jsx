import React from "react";
import PropTypes from "prop-types";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./banner.scss";

Banner.propTypes = {
  bannerList: PropTypes.array.isRequired,
};

export default function Banner({ bannerList }) {
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      className="banner"
      emulateTouch={true}
      transitionTime={1000}
      interval={30000}
    >
      {bannerList.map((bannerList, index) => {
        return (
          <div key={index}>
            <img src={bannerList.url} alt={bannerList.name} />
          </div>
        );
      })}
    </Carousel>
  );
}
