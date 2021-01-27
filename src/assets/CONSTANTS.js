import banner1 from "assets/image/banner/banner1.webp";

import nike from "assets/image/brand-logo/001-nike.svg";
import adidas from "assets/image/brand-logo/002-adidas.svg";
import swarm from "assets/image/brand-logo/003-swarm.svg";
import beatsPill from "assets/image/brand-logo/004-beats-pill.svg";
import fiverr from "assets/image/brand-logo/005-fiverr.svg";
import xingLogo from "assets/image/brand-logo/007-xing-logo.svg";

const NAV_MAIN_LIST = [
  {
    name: "Trang Chủ",
    link: "/product",
    exact: true,
  },
  {
    name: "Cho Nữ",
    link: "/product/filter-page",
  },
  {
    name: "Cho Nam",
    link: "/product/filter-page",
  },
  {
    name: "Về Chúng tôi",
    link: "/about-us",
  },
];

const CATEGORY_LIST = [
  {
    name: "Kiểu dáng",
    dropDown: [
      { name: "Low Top", url: "?type=lowtop" },
      { name: "High Top", url: "?type=hightop" },
      { name: "Slip On", url: "?type=slipon" },
    ],
  },
  {
    name: "Bộ Sưu Tập",
    dropDown: [
      { name: "Irrelevant", url: "?collections=irrelevant" },
      { name: "DiscoverYou", url: "?collections=discover-you" },
      { name: "Ananas Symbol", url: "?collections=ananas-symbol" },
      { name: "Track 6 OG", url: "?collections=track-6-og" },
      { name: "Unsettling", url: "?collections=unsettling" },
      { name: "Ananas x Lucky Luke", url: "?collections=ananas-x-luckyluke" },
    ],
  },
  {
    name: "Thương Hiệu",
    dropDown: [
      { name: "Nike", url: "?brand=nike" },
      { name: "Adidas", url: "?brand=adidas" },
      { name: "New Balance", url: "?brand=new-balance" },
      { name: "ASICS", url: "?brand=asics" },
      { name: "Kering", url: "?brand=kering" },
    ],
  },
];

const BANNER_LIST = [
  {
    name: "banner1",
    url: banner1,
  },
];

const WOMAN_CATE = [
  {
    name: "all",
  },
  {
    name: "blazers",
  },
  {
    name: "jackets",
  },
  {
    name: "dress",
  },
  {
    name: "trousers",
  },
  {
    name: "accessories",
  },
];

const MAN_CATE = [
  {
    name: "all",
  },
  {
    name: "blazers",
  },
  {
    name: "jackets",
  },
  {
    name: "trousers",
  },
  {
    name: "accessories",
  },
];
const BRAND_LIST = [nike, adidas, swarm, beatsPill, fiverr, xingLogo];

const SORTODER_LIST = [
  {
    name: "Giá giảm dần",
    url: "?sortOrder=lower",
  },
  {
    name: "Giá tăng dần",
    url: "?sortOrder=higher",
  },
  {
    name: "Xem nhiều nhất",
    url: "?sortOrder=mostviews",
  },
  {
    name: "Yêu thích nhất",
    url: "?sortOrder=mostfav",
  },
  {
    name: "Mới nhất",
    url: "?sortOrder=newest",
  },
];

const NUMITEMDISPLAY_LIST = [
  {
    name: "8 sản phẩm",
    url: "?limit=8",
  },
  {
    name: "16 sản phẩm",
    url: "?limit=16",
  },
  {
    name: "20 sản phẩm",
    url: "?limit=20",
  },
  {
    name: "24 sản phẩm",
    url: "?limit=24",
  },
];
export { default as banner7 } from "assets/image/banner/banner7.webp";
export { default as banner8 } from "assets/image/banner/banner8.webp";
export { default as banner9 } from "assets/image/banner/banner9.webp";

export {
  NAV_MAIN_LIST,
  BANNER_LIST,
  WOMAN_CATE,
  MAN_CATE,
  BRAND_LIST,
  CATEGORY_LIST,
  SORTODER_LIST,
  NUMITEMDISPLAY_LIST,
};
