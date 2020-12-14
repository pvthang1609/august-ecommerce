import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewProductsDisplay from "features/product/components/new-product-display";

import "./main-page.scss";

import banner7 from "assets/image/banner/banner7.webp";
import banner8 from "assets/image/banner/banner8.webp";
import banner9 from "assets/image/banner/banner9.webp";
import { BANNER_LIST } from "assets/CONSTANTS";
import Banner from "components/banner";

import {
  PRODUCT_LIST,
  WOMAN_CATE,
  MAN_CATE,
  BRAND_LIST,
} from "assets/CONSTANTS";
// import productApi from "api/productApi";
import BrandLogo from "components/brand-logo";

export default function MainPage() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       const params = { id: "1", name: "thang" };
  //       const response = await productApi.get(params);
  //       setData(response);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   fetchApi();
  // }, []);

  return (
    <div>
      <Banner bannerList={BANNER_LIST} />
      <NewProductsDisplay
        productList={PRODUCT_LIST}
        heading="#forwoman"
        headingBackground="vintage"
        headingImg={banner7}
        categoryList={WOMAN_CATE}
        gender="woman"
      />
      <div className="secondary-banner">
        <img src={banner8} alt="banner8" />
        <Link className="secondary-banner__tittle-link" to="#">
          Xem thêm
        </Link>
      </div>
      <NewProductsDisplay
        productList={PRODUCT_LIST}
        heading="#forman"
        headingBackground="urban"
        headingImg={banner9}
        categoryList={MAN_CATE}
        gender="men"
      />
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
