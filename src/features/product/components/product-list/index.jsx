import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import "./product-list.scss";
import ProductCardSkeleton from "../product-card-skeleton";
import classNames from "classnames";
import { getListProduct } from "actions/productAction";
import sever503 from "assets/image/503.svg";

ProductList.propTypes = {
  children: PropTypes.func,
  filter: PropTypes.object,
  heading: PropTypes.string,
  showNav: PropTypes.bool,
  nameState: PropTypes.string,
};

function ProductList(props) {
  const { children, filter, heading, showNav = true, nameState } = props;
  const [params, setParams] = useState({ limit: 8, ...filter });
  const { products, loading, error } = useSelector((state) => state.product);
  const { queryProducts } = products[nameState] || [];
  const isLoading = loading[nameState] ? loading[nameState] : false;
  const isError = error[nameState] ? error[nameState] : "";
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(getListProduct(nameState, params));
  }, [params]);

  const handleClick = (object) => {
    const newParams = { ...params, ...object };
    setParams(newParams);
  };

  const checkClassname = (value) => {
    return Object.values(params).includes(value);
  };

  return (
    <section className="grid wide">
      {heading && (
        <div className="row">
          <div className="col l-12 m-12 s-12">
            <div className="product-list__heading">
              <h2>{heading}</h2>
            </div>
          </div>
        </div>
      )}
      {showNav && (
        <div className="row">
          <div className="col l-12 m-12 s-12">
            <div className="product-list__nav-bar">
              <ul className="list">
                <li
                  className={classNames("item", {
                    "item--active": checkClassname(""),
                  })}
                  onClick={() => handleClick({ type: "" })}
                >
                  Tất cả
                </li>
                <li
                  className={classNames("item", {
                    "item--active": checkClassname("lowtop"),
                  })}
                  onClick={() => handleClick({ type: "lowtop" })}
                >
                  Low-Top
                </li>
                <li
                  className={classNames("item", {
                    "item--active": checkClassname("hightop"),
                  })}
                  onClick={() => handleClick({ type: "hightop" })}
                >
                  High-Top
                </li>
                <li
                  className={classNames("item", {
                    "item--active": checkClassname("slipon"),
                  })}
                  onClick={() => handleClick({ type: "slipon" })}
                >
                  Slip-On
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {queryProducts && (
        <div className="row">{queryProducts.map(children)}</div>
      )}
      {isLoading && (
        <div className="row">
          {[0, 1, 2, 3, 4, 5, 6, 7].map(() => {
            return <ProductCardSkeleton key={0} />;
          })}
        </div>
      )}
      {isError && (
        <div className="row">
          <div className="col l-6 l-o-3">
            <img src={sever503} alt="" />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProductList;
