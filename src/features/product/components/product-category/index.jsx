import React from "react";
import PropTypes from "prop-types";
import Item from "./item";

ProductCategory.propTypes = {
  category: PropTypes.array,
};

function ProductCategory(props) {
  const { category } = props;
  return (
    <ul style={{ listStyleType: "none" }}>
      {category.map((item, index) => {
        return <Item key={index} name={item.name} subList={item.dropDown} />;
      })}
    </ul>
  );
}

export default ProductCategory;
