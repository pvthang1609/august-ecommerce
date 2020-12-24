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

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "actions/productAction";

import "./main-page.scss";

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
        <p>Loading...</p>
      ) : fail ? (
        <p>{fail}</p>
      ) : (
        <NewProductsDisplay
          productList={listFemale}
          heading="#forwoman"
          headingBackground="vintage"
          headingImg={banner7}
          categoryList={WOMAN_CATE}
          gender="woman"
        />
      )}
      <div className="secondary-banner">
        <img src={banner8} alt="banner8" />
        <Link className="secondary-banner__tittle-link" to="#">
          Xem thêm
        </Link>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : fail ? (
        <p>{fail}</p>
      ) : (
        <NewProductsDisplay
          productList={listMale}
          heading="#forman"
          headingBackground="urban"
          headingImg={banner9}
          categoryList={MAN_CATE}
          gender="men"
        />
      )}
      <div className="third-banner">
        <div>
          <img src={banner7} alt="none" />
        </div>
        <div>
          <img src={banner9} alt="none" />
        </div>
        <div className="block-center">
          <div>
            <p>#auguststore</p>
          </div>
        </div>
      </div>
      <BrandLogo brandList={BRAND_LIST} />
    </div>
  );
}
