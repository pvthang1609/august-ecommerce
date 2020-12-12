import React from "react";
import PropTypes from "prop-types";
import "./new-product-display.scss";
import { Link } from "react-router-dom";
import TabHeaders from "components/tab-headers";
import ProductList from "../product-list";

NewProductsDisplay.propTypes = {
  productList: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  headingBackground: PropTypes.string.isRequired,
  categoryList: PropTypes.array.isRequired,
  gender: PropTypes.string,
};

export default function NewProductsDisplay({
  productList,
  heading,
  headingBackground,
  headingImg,
  categoryList,
  gender,
}) {
  return (
    <section className="main-page__newProducts">
      <div
        className="container main-page__inner"
        style={gender === "men" ? { flexDirection: "row-reverse" } : null}
      >
        <div
          className="main-page__newProducts--left"
          style={
            gender === "men"
              ? { maxWidth: "45rem", paddingRight: "0rem", height: "100%" }
              : null
          }
        >
          <div
            className="box-title"
            style={gender === "men" ? { height: "11.5rem" } : null}
          >
            <h2 className="box-title__title-background">{headingBackground}</h2>
            <h2 className="box-title__title">{heading}</h2>
          </div>
          <div className="box-img">
            <img className="box-img__image" src={headingImg} alt="headingImg" />
            <Link className="box-img__more-btn" to="#">
              Xem Thêm
            </Link>
          </div>
        </div>
        <div className="main-page__newProducts--right">
          <TabHeaders list={categoryList} />
          <ProductList
            productList={productList}
            width={720}
            numbItem={3}
            spaceItem={20}
          />
        </div>
      </div>
    </section>
  );
}
