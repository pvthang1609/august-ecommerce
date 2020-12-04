import banner1 from "assets/image/banner/banner1.jpg";
import banner4 from "assets/image/banner/banner4.jpg";
import banner5 from "assets/image/banner/banner5.jpg";
import banner6 from "assets/image/banner/banner6.jpg";

const NAV_MAIN_LIST = [
  {
    name: "Trang Chủ",
    link: "/",
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

export { NAV_MAIN_LIST, BANNER_LIST };
