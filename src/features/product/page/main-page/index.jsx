import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewProductsDisplay from "features/product/components/new-product-display";

import "./main-page.scss";

import banner7 from "assets/image/banner/banner7.webp";
import banner8 from "assets/image/banner/banner8.webp";
import banner9 from "assets/image/banner/banner9.webp";
import { BANNER_LIST } from "assets/CONSTANTS";
import Banner from "components/banner";

import { WOMAN_CATE, MAN_CATE, BRAND_LIST } from "assets/CONSTANTS";
import productApi from "api/productApi";
import BrandLogo from "components/brand-logo";

export default function MainPage() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [isErr1, setIsErr1] = useState(false);
  const [isErr2, setIsErr2] = useState(false);

  useEffect(() => {
    const fetchApi1 = async () => {
      try {
        setIsLoading1(true);
        const params1 = { gender: "Male", order: "newest" };
        const response1 = await productApi.get(params1);
        setData1(response1.queryProducts);
        setIsLoading1(false);
      } catch (err) {
        setIsErr1(err.message);
        setIsLoading1(false);
      }
    };
    const fetchApi2 = async () => {
      try {
        setIsLoading2(true);
        const params2 = { gender: "Female", order: "newest" };
        const response2 = await productApi.get(params2);
        setData2(response2.queryProducts);
        setIsLoading2(false);
      } catch (err) {
        setIsErr2(err.message);
        setIsLoading2(false);
      }
    };
    fetchApi1();
    fetchApi2();
  }, []);

  return (
    <div>
      <Banner bannerList={BANNER_LIST} />
      {isLoading1 ? (
        <p>Loading...</p>
      ) : isErr1 ? (
        <p>{isErr1}</p>
      ) : (
        <NewProductsDisplay
          productList={data1}
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
      {isLoading2 ? (
        <p>Loading...</p>
      ) : isErr2 ? (
        <p>{isErr2}</p>
      ) : (
        <NewProductsDisplay
          productList={data2}
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
