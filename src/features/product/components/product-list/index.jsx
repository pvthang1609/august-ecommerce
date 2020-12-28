import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../product-card";
import TabHeaders from "components/tab-headers";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  numbItem: PropTypes.number.isRequired,
  spaceItem: PropTypes.number.isRequired,
  categoryList: PropTypes.array.isRequired,
};

export default function ProductList({ productList, categoryList }) {
  return (
    <div className="col l-8 m-12">
      <TabHeaders list={categoryList} />
      <div className="row">
        {productList.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
