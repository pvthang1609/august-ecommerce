import React, { useEffect } from "react";

import { NewProductsDisplay, BrandLogo, Banner } from "assets/import";
import {
  BANNER_LIST,
  MAN_CATE,
  WOMAN_CATE,
  BRAND_LIST,
  banner7,
  banner8,
  banner9,
} from "assets/CONSTANTS";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "actions/productAction";

import "./main-page.scss";
import ProductCardSkeleton from "features/product/components/skeleton-loading/product-card-skeleton";

export default function MainPage() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.listProductsMain);
  const { listMale, listFemale, loading, fail } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div>
      <Banner bannerList={BANNER_LIST} />
      {loading ? (
        <ProductCardSkeleton width={720} numbItem={3} spaceItem={20} />
      ) : fail ? (
        <p>{fail}</p>
      ) : (
        <NewProductsDisplay
          productList={listFemale}
          title="#forwoman"
          titleBg="vintage"
          image={banner7}
          categoryList={WOMAN_CATE}
        />
      )}
      <section className="grid wide">
        <div className="row">
          <div className="col l-12 m-12 m-0">
            <div
              className="banner"
              style={{ backgroundImage: `url(${banner8})` }}
            >
              <button className="btn btn--more">Xem thêm</button>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <p>Loading...</p>
      ) : fail ? (
        <p>{fail}</p>
      ) : (
        <NewProductsDisplay
          productList={listMale}
          title="#forman"
          titleBg="urban"
          image={banner9}
          categoryList={MAN_CATE}
        />
      )}
      <section className="grid wide">
        <div className="row">
          <div className="col l-6 m-6 m-0">
            <div
              className="banner"
              style={{ backgroundImage: `url(${banner7})` }}
            ></div>
          </div>
          <div className="col l-6 m-6 m-0">
            <div
              className="banner"
              style={{ backgroundImage: `url(${banner9})` }}
            ></div>
          </div>
        </div>
      </section>
      <BrandLogo brandList={BRAND_LIST} />
    </div>
  );
}
