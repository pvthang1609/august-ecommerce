import React, { useState } from "react";
import PropTypes from "prop-types";
import NoImg from "assets/image/no-image.svg";
import { Link, useRouteMatch } from "react-router-dom";

import "./product-card.scss";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  widthList: PropTypes.number,
  numbItem: PropTypes.number,
  spaceItem: PropTypes.number,
};

import { useDispatch, useSelector } from "react-redux";
import { addToCart, editToCart } from "actions/paymentAction";
import { notificationAddCart } from "actions/notificationAction";

export default function ProductCard({ product }) {
  const match = useRouteMatch();

  const { _id, name, price, collection, mainImg } = product;

  const [isLike, setIsLike] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { listCart } = cart;

  const handleLikeBtnClick = () => {
    setIsLike(!isLike);
  };
  const handleDetailBtnClick = () => {
    console.log("isRun");
  };
  const handleAddBtnClick = (_id, name) => {
    dispatch(notificationAddCart(name));
    const value = listCart.find((item) => item.id === _id);
    const index = listCart.indexOf(value);
    if (index >= 0) {
      dispatch(editToCart(index, "increment"));
      return;
    }
    dispatch(addToCart(_id));
  };
  const handleBuyNowBtnClick = () => {
    console.log("isRun");
  };

  return (
    <div className="col l-4 m-6 product-card">
      {collection && (
        <div
          className="product-card__tag"
          style={
            collection === "new"
              ? { background: "#83d7e2" }
              : collection === "hot"
              ? { background: "#f55d5c" }
              : collection === "sale"
              ? { background: "#fbd64a" }
              : null
          }
        >
          {collection}
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
        <Link to={`${match.url}/${_id}`}>
          <img src={mainImg ? mainImg : NoImg} alt={name} />
        </Link>
        <div className="product-card__group-btn">
          <button
            className="product-card__detail-btn"
            onClick={handleDetailBtnClick}
          >
            <i className="fa fa-info" aria-hidden="true"></i>
          </button>
          <button
            className="product-card__add-btn"
            onClick={() => handleAddBtnClick(_id, name)}
          >
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
          <Link to={`${match.url}/id=${_id}`}>{name}</Link>
        </div>
        <div className="product-card__text--price">
          {price ? `$${price}` : "Liên hệ"}
        </div>
      </div>
    </div>
  );
}
