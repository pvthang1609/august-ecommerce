import React from "react";

import { BrandLogo } from "assets/import";
import { BRAND_LIST } from "assets/CONSTANTS";

import "./main-page.scss";
import ProductList from "features/product/components/product-list";
import ProductCard from "features/product/components/product-card";
import SingleBanner from "features/product/components/single-banner";
import sBanner01 from "assets/image/single-banner/01.webp";
import sBanner02 from "assets/image/single-banner/02.webp";
import sBanner03 from "assets/image/single-banner/03.webp";
import CountdownBanner from "features/product/components/countdown-banner";
import Banner from "components/banner";

export default function MainPage() {
  return (
    <main className="main-page">
      <div className="grid">
        <div className="row no-gutters">
          <div className="col l-12">
            <Banner />
          </div>
        </div>
      </div>
      <ProductList
        heading="Hàng mới về"
        filter={{ sortOrder: "newest" }}
        nameState="new"
      >
        {(item, index) => {
          return (
            <ProductCard
              product={item}
              index={index}
              className="col l-3 m-3 s-12"
            />
          );
        }}
      </ProductList>
      <section className="grid pading--1">
        <div className="row no-gutters">
          <SingleBanner
            className="col l-4 m-4 s-12"
            content="Summer Travel Collection"
            heading="Man's Collectons"
            link={{ name: "show now", url: "#" }}
            image={sBanner01}
          />
          <SingleBanner
            className="col l-4 m-4 s-12"
            content="Summer Travel Collection"
            heading="Man's Collectons"
            link={{ name: "show now", url: "#" }}
            image={sBanner02}
          />
          <SingleBanner
            className="col l-4 m-4 s-12"
            content="Summer Travel Collection"
            heading="Man's Collectons"
            link={{ name: "show now", url: "#" }}
            image={sBanner03}
          />
        </div>
      </section>
      <ProductList
        heading="Được yêu thích nhất"
        filter={{ sortOrder: "mostfav" }}
        nameState="fav"
      >
        {(item, index) => {
          return (
            <ProductCard
              product={item}
              index={index}
              className="col l-3 m-3 s-12"
            />
          );
        }}
      </ProductList>
      <section className="grid pading--1">
        <div className="row no-gutters">
          <div className="col l-12 m-12 s-12">
            <CountdownBanner />
          </div>
        </div>
      </section>
      <section className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 s-12">
            <BrandLogo brandList={BRAND_LIST} />
          </div>
        </div>
      </section>
    </main>
  );
}
