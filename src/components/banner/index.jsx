import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./banner.scss";

import banner3 from "assets/image/banner/banner3.jpg";
import banner4 from "assets/image/banner/banner4.jpg";
import banner5 from "assets/image/banner/banner5.jpg";
import banner6 from "assets/image/banner/banner6.jpg";

export default function Banner() {
  const handleClickItem = (index) => {
    console.log(index);
  };

  return (
    <Carousel
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      showStatus={false}
      className="banner"
      onClickItem={handleClickItem}
      emulateTouch={true}
      transitionTime={1000}
      interval={30000}
    >
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
      <div>
        <img src={banner5} />
      </div>
      <div>
        <img src={banner6} />
      </div>
    </Carousel>
  );
}
