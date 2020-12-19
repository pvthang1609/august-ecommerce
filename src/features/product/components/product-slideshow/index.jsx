import React, { useEffect, useState } from "react";
import PropType from "prop-types";

ProductSlideShow.propTypes = {
  imageList: PropType.array,
};

import "./product-slideshow.scss";

import classnames from "classnames";

export default function ProductSlideShow({ imageList }) {
  const [indexMainImg, setIndexMainImg] = useState(0);

  useEffect(() => {
    const mainImg = document.querySelector(".wrapper-slider__main-image");
    const zoomImg = document.querySelector(".zoomLen__img");

    const positionMouse = (event) => {
      zoomImg.style.top = `-${event.offsetY / (mainImg.offsetHeight / 500)}%`;
      zoomImg.style.left = `-${event.offsetX / (mainImg.offsetWidth / 500)}%`;
    };

    mainImg.addEventListener("mousemove", positionMouse);
    return () => {
      mainImg.removeEventListener("mousemove", positionMouse);
    };
  }, []);

  const handleNextBtn = () => {
    if (indexMainImg === imageList.length - 1) {
      setIndexMainImg(0);
      return;
    }
    setIndexMainImg(indexMainImg + 1);
  };

  const handlePrevBtn = () => {
    if (indexMainImg === 0) {
      setIndexMainImg(imageList.length - 1);
      return;
    }
    setIndexMainImg(indexMainImg - 1);
  };

  const handleImgClick = (index) => {
    setIndexMainImg(index);
  };

  return (
    <div className="wrapper-slider">
      <div className="wrapper-slider__main-image">
        <img src={imageList[indexMainImg]} alt="none" />
        <button className="main-image__btn next-btn" onClick={handleNextBtn}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
        <button
          className="main-image__btn previous-btn"
          onClick={handlePrevBtn}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </div>
      <div className="zoomLen">
        <img
          className="zoomLen__img"
          src={imageList[indexMainImg]}
          alt="none"
        />
      </div>
      <div className="slick-slider">
        {imageList.map((image, index) => {
          return (
            <div
              className={classnames("slick-slider__item", {
                "slick-slider__item-active": indexMainImg === index,
              })}
              key={index}
              onClick={() => handleImgClick(index)}
            >
              <img src={image} alt="none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
