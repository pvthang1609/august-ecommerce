import React, { useEffect, useState } from "react";

import { ProductSlideShow, ProductForm, BreadCrumbs } from "assets/import";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "actions/productAction";

import "./product-page.scss";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const { products, loading, error } = useSelector((state) => state.product);
  const { detail } = products;
  const {
    name,
    price,
    img = [],
    info = [{ size: 35, code: "AGT" }],
    favorite,
    desc,
  } = detail;

  const [size, setSize] = useState(info[0]);

  useEffect(() => {
    dispatch(getDetailProduct(productId));
  }, [productId]);

  const handleSizeChange = (value) => {
    const newSize = info.find((item) => item.size == value);
    setSize(newSize);
  };

  const BREADCRUMBS_LIST = [{ name: name, url: "/" }];

  return (
    <main>
      <BreadCrumbs list={BREADCRUMBS_LIST} />
      {!loading.detail && (
        <div className="container">
          <div className="product-detail">
            <div>
              <ProductSlideShow imageList={img} />
            </div>
            <div>
              <div className="product-info">
                <h1 className="product-info__product-name">{name}</h1>
                <div className="product-info__block">
                  <p className="product-info__product-code">
                    Mã sản phẩm:{" "}
                    <span>{size.code ? size.code : "loading"}</span>
                  </p>
                  <p className="product-info__product-inventory">{`Hàng trong kho: ${
                    size.inventory || "loading"
                  } chiếc.`}</p>
                </div>
                <div className="product-info__block">
                  <p className="product-info__product-price">{`${price}.000đ`}</p>
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
      {error.detail && <div>ERROR</div>}
    </main>
  );
}
