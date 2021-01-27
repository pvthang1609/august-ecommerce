import React from "react";
import PropTypes from "prop-types";
import TabHeaders from "components/tab-headers";

ProductList.propTypes = {
  productList: PropTypes.array.isRequired,
  categoryList: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.func,
};

export default function ProductList({
  productList,
  categoryList,
  className,
  children,
}) {
  return (
    <div className={className ? className : null}>
      {categoryList && <TabHeaders list={categoryList} />}
      <div className="row">{productList.map(children)}</div>
    </div>
  );
}
