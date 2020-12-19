import React, { useState } from "react";
import BreadCrumb from "features/product/components/breadcrumb";

import { Link, useParams } from "react-router-dom";

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
    favorite,
    info,
    name,
    price,
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
                <p>
                  {favorite} <i className="fa fa-heart" aria-hidden="true"></i>
                </p>
                <p style={{ fontStyle: "italic" }}>* đã bao gồm VAT.</p>
              </div>
            </div>
            <div className="product-info__product-desc">
              {desc && <p>{desc}</p>}
            </div>
            <div className="product-info__product-form">
              <ProductForm
                info={info}
                onSizeChange={(value) => handleSizeChange(value)}
              />
              <div className="product-info__support-block">
                <p>
                  <span>Tư vấn:</span> 19001001.
                </p>
                <Link to="/pages/guide-size">+ Xem hướng dẫn chọn size</Link>
              </div>
            </div>
            <div className="product-info__product-information"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
