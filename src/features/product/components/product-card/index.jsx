import React, { useState } from "react";
import PropTypes from "prop-types";
import NoImg from "assets/image/no-image.svg";
import "./product-card.scss";
import { Link, useRouteMatch } from "react-router-dom";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default function ProductCard({
  product,
  widthList,
  numbItem,
  spaceItem,
}) {
  const widthProductCard = (widthList - (numbItem - 1) * spaceItem) / numbItem;

  const match = useRouteMatch();

  const { id, name, price, rate, tag, mainImg, album } = product;

  const [isLike, setIsLike] = useState(false);

  const handleLikeBtnClick = () => {
    setIsLike(!isLike);
  };
  const handleDetailBtnClick = () => {
    console.log("isRun");
  };
  const handleAddBtnClick = () => {
    console.log("isRun");
  };
  const handleBuyNowBtnClick = () => {
    console.log("isRun");
  };

  return (
    <div className="product-card" style={{ maxWidth: widthProductCard }}>
      {tag && (
        <div
          className="product-card__tag"
          style={
            tag === "new"
              ? { background: "#83d7e2" }
              : tag === "hot"
              ? { background: "#f55d5c" }
              : tag === "sale"
              ? { background: "#fbd64a" }
              : null
          }
        >
          {tag}
        </div>
      )}
      <button className="product-card__like-btn" onClick={handleLikeBtnClick}>
        {isLike ? (
          <i className="fa fa-heart" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        )}
      </button>
      <div className="product-card__image">
        <img src={mainImg ? mainImg : NoImg} alt={name} />
        <div className="product-card__group-btn">
          <button
            className="product-card__detail-btn"
            onClick={handleDetailBtnClick}
          >
            <i className="fa fa-info" aria-hidden="true"></i>
          </button>
          <button className="product-card__add-btn" onClick={handleAddBtnClick}>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>
          </button>
          <button
            className="product-card__buy-now-btn"
            onClick={handleBuyNowBtnClick}
          >
            <i className="fa fa-money" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="product-card__text">
        <div className="product-card__text--name">
          <Link to={`${match.url}/${id}`}>{name}</Link>
        </div>
        <div className="product-card__text--price">
          {price ? `$${price}` : "Liên hệ"}
        </div>
      </div>
    </div>
  );
}
