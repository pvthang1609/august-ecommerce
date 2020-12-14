import React, { useState } from "react";
import BreadCrumb from "features/product/components/breadcrumb";

import { useParams } from "react-router-dom";

import { PRODUCT_LIST } from "assets/CONSTANTS";
import ProductSlideShow from "features/product/components/product-slideshow";

import "./product-page.scss";
import ProductForm from "features/product/components/product-form";

export default function ProductPage() {
  const { productId } = useParams();
  const product = PRODUCT_LIST.find((product) => product._id == productId);
  const {
    album,
    classify,
    collection,
    color,
    favorite,
    gender,
    info,
    mainImg,
    name,
    price,
    views,
    desc,
  } = product;
  const [productCurrent, setProductCurrent] = useState(info[0]);

  const handleSizeChange = (value) => {
    const newProductCurrent = info.find((item) => item.size == value);
    setProductCurrent(newProductCurrent);
  };

  return (
    <section>
      <BreadCrumb collection={collection} classify={classify} name={name} />
      <div className="container">
        <div className="product-detail">
          <div>
            <ProductSlideShow imageList={album} />
          </div>
          <div>
            <div className="product-info">
              <h1 className="product-info__product-name">{name}</h1>
              <div className="product-info__block">
                <p className="product-info__product-code">
                  Mã sản phẩm: <span>{productCurrent.code}.</span>
                </p>
                <p className="product-info__product-inventory">{`Hàng trong kho: ${productCurrent.inventory} chiếc.`}</p>
              </div>
              <div className="product-info__block">
                <p className="product-info__product-price">{`${
                  productCurrent.price ? productCurrent.price : price
                }.000đ`}</p>
                <i>* đã bao gồm VAT.</i>
              </div>
            </div>
            <div className="product-info__product-desc">
              {desc && <p>{desc}</p>}
            </div>
            <div>
              <ProductForm
                info={info}
                onSizeChange={(value) => handleSizeChange(value)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
