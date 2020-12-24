import React, { useEffect, useState } from "react";

import { ProductSlideShow, ProductForm, BreadCrumb } from "assets/import";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProduct } from "actions/productAction";

import "./product-page.scss";

export default function ProductPage() {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const detailData = useSelector((state) => state.detailProduct);
  const { detail, loading } = detailData;
  const {
    name,
    category,
    classify,
    desc,
    album,
    info,
    price,
    favorite,
  } = detail;

  const [productCurrent, setProductCurrent] = useState(info[0]);

  useEffect(() => {
    dispatch(detailProduct(productId));
  }, [dispatch]);

  const handleSizeChange = (value) => {
    const newProductCurrent = info.find((item) => item.size == value);
    setProductCurrent(newProductCurrent);
  };

  return (
    <section>
      {!loading && (
        <BreadCrumb category={category} classify={classify} name={name} />
      )}
      {!loading && (
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
                    {favorite}{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i>
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
      )}
    </section>
  );
}
