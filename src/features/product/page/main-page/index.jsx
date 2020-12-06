import React from "react";

import banner7 from "assets/image/banner/banner7.webp";
import banner8 from "assets/image/banner/banner8.webp";

import ProductList from "features/product/components/product-list";
import TabHeaders from "components/tab-headers";

import "./main-page.scss";

import { PRODUCT_LIST, WOMAN_CATE } from "assets/CONSTANTS";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
      <section className="main-page__for-woman">
        <div className="container main-page__inner">
          <div className="main-page__for-woman--left">
            <div className="box-title">
              <h2 className="box-title__title-background">august</h2>
              <h2 className="box-title__title">#forher</h2>
            </div>
            <div className="box-img">
              <img className="box-img__image" src={banner7} alt="for-her" />
              <Link className="box-img__more-btn" to="#">
                Xem Thêm
              </Link>
            </div>
          </div>
          <div className="main-page__for-woman--right">
            <TabHeaders list={WOMAN_CATE} />
            <ProductList
              productList={PRODUCT_LIST}
              width={720}
              numbItem={3}
              spaceItem={20}
            />
          </div>
        </div>
      </section>
      <div className="secondary-banner">
        <img src={banner8} alt="banner8" />
        <Link className="secondary-banner__tittle-link" to="#">
          Xem thêm
        </Link>
      </div>
    </div>
  );
}
