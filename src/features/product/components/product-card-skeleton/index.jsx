import React from "react";
import Skeleton from "react-loading-skeleton";
import "./product-card-skeleton.scss";
// import PropTypes from "prop-types";

ProductCardSkeleton.propTypes = {};

function ProductCardSkeleton() {
  return (
    <div className="col l-3">
      <div className="skeleton">
        <div className="skeleton__image">
          <Skeleton count={1} height={288} />
        </div>
        <div className="skeleton__name">
          <Skeleton
            count={1}
            width="90%"
            height={20}
            style={{ display: "block", margin: "auto" }}
          />
        </div>
        <div className="skeleton__price">
          <Skeleton
            count={1}
            width="65%"
            style={{ display: "block", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
