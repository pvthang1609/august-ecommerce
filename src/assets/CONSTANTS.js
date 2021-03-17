import nike from "assets/image/brand-logo/001-nike.svg";
import adidas from "assets/image/brand-logo/002-adidas.svg";
import swarm from "assets/image/brand-logo/003-swarm.svg";
import beatsPill from "assets/image/brand-logo/004-beats-pill.svg";
import fiverr from "assets/image/brand-logo/005-fiverr.svg";
import xingLogo from "assets/image/brand-logo/007-xing-logo.svg";

// import banner0 from "assets/image/banner/banner0.webp";
import banner1 from "assets/image/banner/banner1.webp";
import banner2 from "assets/image/banner/banner2.webp";
import banner3 from "assets/image/banner/banner3.webp";
import banner4 from "assets/image/banner/banner4.webp";
import b01 from "assets/image/banner/01.jpg";

const NAV_MAIN_LIST = [
  {
    name: "Trang Chủ",
    link: "/product",
    exact: true,
  },
  {
    name: "Giầy Nữ",
    link: "/product/filter-page",
  },
  {
    name: "Giày Nam",
    link: "/product/filter-page",
  },
  {
    name: "Thông tin",
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
    name: "banner0",
    url: b01,
  },
  {
    name: "banner1",
    url: banner1,
  },
  {
    name: "banner2",
    url: banner2,
  },
  {
    name: "banner3",
    url: banner3,
  },
  {
    name: "banner4",
    url: banner4,
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
const COLORCHART = {
  c1: "#845ec2",
  c2: "#ffc75f",
  c3: "#ff5e78",
  c4: "#00917c",
  c5: "#8ac4d0",
  c6: "#e6d5b8",
};

export { default as banner5 } from "assets/image/banner/banner5.webp";
export { default as banner6 } from "assets/image/banner/banner6.webp";
export { default as banner7 } from "assets/image/banner/banner7.webp";

export {
  NAV_MAIN_LIST,
  BANNER_LIST,
  WOMAN_CATE,
  MAN_CATE,
  BRAND_LIST,
  CATEGORY_LIST,
  SORTODER_LIST,
  NUMITEMDISPLAY_LIST,
  COLORCHART,
};

// const overview = [
//   {
//     day: {
//       date: {
//         start: 1615131559, // timestamp
//         end: 1615131559, // timestamp
//       },
//       orderNumber: 2,
//       revenue: 300,
//       profit: 50,
//     },
//     week: {
//       date: {
//         start: 1615131559, // timestamp
//         end: 1615131559, // timestamp
//       },
//       orderNumber: 7,
//       revenue: 1900,
//       profit: 700,
//     },
//     month: {
//       date: {
//         start: 1615131559, // timestamp
//         end: 1615131559, // timestamp
//       },
//       orderNumber: 30,
//       revenue: 23000,
//       profit: 15000,
//     },
//     year: {
//       date: {
//         start: 1615131559, // timestamp
//         end: 1615131559, // timestamp
//       },
//       orderNumber: 100,
//       revenue: 80000,
//       profit: 60000,
//     },
//   },
// ];

// hàm lấy time start và end khi nhập date
