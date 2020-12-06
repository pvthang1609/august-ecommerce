import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { productId } = useParams();
  console.log(productId);

  return <div>{`This is ${productId}`}</div>;
}
