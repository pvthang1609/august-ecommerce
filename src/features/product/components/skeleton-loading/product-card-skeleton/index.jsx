import Skeleton from "react-loading-skeleton";

import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 226,
        textAlign: "center",
      }}
    >
      <Skeleton height={226} />
      <Skeleton width="80%" />
      <Skeleton width="30%" />
    </div>
  );
}
