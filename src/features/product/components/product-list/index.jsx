import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../product-card";

import "./product-list.scss";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  numbItem: PropTypes.number.isRequired,
  spaceItem: PropTypes.number.isRequired,
};

export default function ProductList({
  productList,
  width,
  numbItem,
  spaceItem,
}) {
  return (
    <div style={{ maxWidth: width }} className="product-list">
      {productList.map((product, index) => {
        return (
          <ProductCard
            key={index}
            product={product}
            widthList={width}
            numbItem={numbItem}
            spaceItem={spaceItem}
          />
        );
      })}
    </div>
  );
}
