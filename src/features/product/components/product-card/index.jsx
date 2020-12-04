import React, { useState } from "react";
import PropTypes from "prop-types";
import NoImg from "assets/image/no-image.svg";
import "./product-card.scss";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default function ProductCard({ product }) {
  const { id, name, price, rate, tag, mainImg, album } = product;

  const [isLike, setIsLike] = useState(false);

  const handleClick = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="product-card">
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
      <button className="product-card__like-btn" onClick={handleClick}>
        {isLike ? (
          <i className="fa fa-heart" aria-hidden="true"></i>
        ) : (
          <i className="fa fa-heart-o" aria-hidden="true"></i>
        )}
      </button>
      <div className="product-card__image">
        <img src={mainImg ? mainImg : NoImg} alt={name} />
      </div>
      <div className="product-card__text">
        <div className="product-card__text--name">{name}</div>
        <div className="product-card__text--price">
          {price ? `$${price}` : "Liên hệ"}
        </div>
      </div>
    </div>
  );
}
