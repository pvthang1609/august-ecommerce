import banner1 from "assets/image/banner/banner1.webp";
import banner4 from "assets/image/banner/banner4.webp";
import banner5 from "assets/image/banner/banner5.webp";
import banner6 from "assets/image/banner/banner6.webp";

import image from "assets/image/product-demo/1.jpg";

const NAV_MAIN_LIST = [
  {
    name: "Trang Chủ",
    link: "/product",
    exact: true,
  },
  {
    name: "Cho Nữ",
    link: "/for-woman",
    dropDown: [
      {
        name: "Aó khoác",
        link: "/for-woman/blazers",
      },
      {
        name: "Aó Jackets",
        link: "/for-woman/jackets",
      },
      {
        name: "Váy",
        link: "/for-woman/dresses",
      },
    ],
  },
  {
    name: "Cho Nam",
    link: "/for-men",
    dropDown: [
      {
        name: "Aó khoác",
        link: "/for-woman/blazers",
      },
      {
        name: "Aó Jackets",
        link: "/for-woman/jackets",
      },
      {
        name: "Quần âu",
        link: "/for-woman/dresses",
      },
    ],
  },
  {
    name: "Về Chúng tôi",
    link: "/about-us",
  },
];

const BANNER_LIST = [
  {
    name: "banner1",
    url: banner1,
  },
  {
    name: "banner4",
    url: banner4,
  },
  {
    name: "banner5",
    url: banner5,
  },
  {
    name: "banner6",
    url: banner6,
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

const PRODUCT_LIST = [
  {
    id: 1,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    tag: "sale",
  },
  {
    id: 1,
    name: "Quần âu",
    price: 50,
    mainImg: image,
  },
  {
    id: 1,
    name: "Quần âu",
    price: 50,
    mainImg: image,
    tag: "hot",
  },
  {
    id: 1,
    name: "Quần âu",
    price: 50,
    mainImg: image,
  },
  {
    id: 1,
    name: "Quần âu",
    price: 50,
    mainImg: image,
    tag: "new",
  },
  {
    id: 1,
    name: "Quần âu",
    price: 50,
    mainImg: image,
  },
];

export { NAV_MAIN_LIST, BANNER_LIST, WOMAN_CATE, PRODUCT_LIST };
