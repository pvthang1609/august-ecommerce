import React, { useState } from "react";
import PropTypes from "prop-types";
import NoImg from "assets/image/no-image.svg";
import { Link, useHistory } from "react-router-dom";

import "./product-card.scss";

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  widthList: PropTypes.number,
  numbItem: PropTypes.number,
  spaceItem: PropTypes.number,
  index: PropTypes.number,
  className: PropTypes.string,
};

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "actions/cartAction";
import { convertPrice } from "custom-hooks/globalFunc";

export default function ProductCard({ product, index, className }) {
  const { _id, name, price, tag, img, info } = product;
  const [isLike, setIsLike] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.authentication);
  const [isOpenSize, setIsOpenSize] = useState(false);
  const [size, setSize] = useState(info[0].size);

  const handlerOpenSize = () => {
    setIsOpenSize(!isOpenSize);
  };

  const handleLikeBtnClick = () => {
    setIsLike(!isLike);
  };
  const handleAddBtnClick = (_id) => {
    if (user) {
      dispatch(addToCart(_id, 1, size));
    } else {
      history.push("auth/login");
    }
  };

  const handleChoiceSize = (value) => {
    setSize(value);
  };

  return (
    <div index={index} className={`product-card ${className}`}>
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
        <Link to={`/product/${_id}`}>
          <img src={img ? img[0] : NoImg} alt={name} />
        </Link>
        <div className="product-card__group-btn">
          <button
            className="btn product-card__add-btn"
            onClick={() => handleAddBtnClick(_id, name)}
          >
            Add to cart
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <div className="product-card__size-btn" onClick={handlerOpenSize}>
            Size
          </div>
          {isOpenSize && (
            <div className="product-card__list-size">
              {info.map((item, index) => {
                return (
                  <div
                    className="product-card__list-size--child"
                    key={index}
                    onClick={() => handleChoiceSize(item.size)}
                    style={
                      size === item.size ? { backgroundColor: "#f55d5c" } : null
                    }
                  >
                    {item.size}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="product-card__text">
        <div className="product-card__text--name">
          <Link to={`/product/${_id}`}>{name}</Link>
        </div>
        <div className="product-card__text--price">
          {price ? `Giá: ${convertPrice(price)}đ` : "Liên hệ"}
        </div>
      </div>
    </div>
  );
}
