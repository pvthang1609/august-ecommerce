import React from "react";
import PropTypes from "prop-types";
import "assets/grid.css";
import "./new-product-display.scss";
import ProductList from "../product-list";

NewProductsDisplay.propTypes = {
  productList: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  titleBg: PropTypes.string.isRequired,
  categoryList: PropTypes.array.isRequired,
  gender: PropTypes.string,
  image: PropTypes.string,
};

export default function NewProductsDisplay({
  productList,
  title,
  image,
  titleBg,
  categoryList,
}) {
  return (
    <section className="grid wide">
      <div className="row n-pro-display">
        <div className="col l-4 m-12">
          <div className="n-pro-display__heading">
            <h2 className="n-pro-display__heading--titleBg">{titleBg}</h2>
            <h2 className="n-pro-display__heading--title">{title}</h2>
          </div>
          <div className="n-pro-display__heading--image">
            <img src={image} alt="none" />
          </div>
        </div>
        <ProductList productList={productList} categoryList={categoryList} />
      </div>
    </section>
  );
}
