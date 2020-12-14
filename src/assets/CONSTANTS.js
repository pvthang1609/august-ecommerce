import banner1 from "assets/image/banner/banner1.webp";
import banner4 from "assets/image/banner/banner4.webp";
import banner5 from "assets/image/banner/banner5.webp";
import banner6 from "assets/image/banner/banner6.webp";

import image from "assets/image/product-demo/1.jpg";
import image2 from "assets/image/product-demo/2.jpg";
import image3 from "assets/image/product-demo/3.jpg";
import image4 from "assets/image/product-demo/4.jpg";

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

const PRODUCT_LIST = [
  {
    _id: 1,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    collection: "sale",
    classify: "shoe",
    gender: "man",
    album: [image, image, image],
    views: 0,
    favorite: 0,
    color: "blue",
    info: [
      {
        code: "august1blue36",
        size: 36,
        inventory: 100,
      },
      {
        code: "august1blue37",
        size: 37,
        inventory: 100,
      },
      {
        code: "august1blue38",
        size: 38,
        inventory: 100,
      },
      {
        code: "august1blue39",
        size: 39,
        inventory: 100,
      },
      {
        code: "august1blue40",
        size: 40,
        inventory: 100,
      },
      {
        code: "august1blue41",
        size: 41,
        inventory: 100,
        price: 52,
      },
      {
        code: "august1blue42",
        size: 42,
        inventory: 100,
        price: 52,
      },
      {
        code: "august1blue43",
        size: 43,
        inventory: 100,
      },
      {
        code: "august1blue44",
        size: 44,
        inventory: 100,
        price: 48,
      },
    ],
  },
  {
    _id: 2,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    collection: "sale",
    classify: "shoe",
    gender: "man",
    album: [image, image, image],
    views: 0,
    favorite: 0,
    color: "red",
    info: [
      {
        code: "august2red36",
        size: 36,
        inventory: 100,
      },
      {
        code: "august2red37",
        size: 37,
        inventory: 100,
      },
      {
        code: "august2red38",
        size: 38,
        inventory: 100,
      },
      {
        code: "august2red39",
        size: 39,
        inventory: 100,
      },
      {
        code: "august2red40",
        size: 40,
        inventory: 100,
      },
      {
        code: "august2red41",
        size: 41,
        inventory: 100,
        price: 52,
      },
      {
        code: "august2red42",
        size: 42,
        inventory: 100,
        price: 52,
      },
      {
        code: "august2red43",
        size: 43,
        inventory: 100,
      },
      {
        code: "august2red44",
        size: 44,
        inventory: 100,
        price: 48,
      },
    ],
  },
  {
    _id: 3,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    collection: "sale",
    classify: "shoe",
    gender: "woman",
    album: [image, image, image],
    views: 0,
    favorite: 0,
    color: "violet",
    info: [
      {
        code: "august3violet36",
        size: 36,
        inventory: 100,
      },
      {
        code: "august3violet37",
        size: 37,
        inventory: 100,
      },
      {
        code: "august3violet38",
        size: 38,
        inventory: 100,
      },
      {
        code: "august3violet39",
        size: 39,
        inventory: 100,
      },
      {
        code: "august3violet40",
        size: 40,
        inventory: 100,
      },
      {
        code: "august3violet41",
        size: 41,
        inventory: 100,
        price: 52,
      },
      {
        code: "august3violet42",
        size: 42,
        inventory: 100,
        price: 52,
      },
      {
        code: "august3violet43",
        size: 43,
        inventory: 100,
      },
      {
        code: "august3violet44",
        size: 44,
        inventory: 100,
        price: 48,
      },
    ],
  },
  {
    _id: 4,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    collection: "sale",
    classify: "shoe",
    gender: "man",
    album: [image, image, image],
    views: 0,
    favorite: 0,
    color: "yellow",
    info: [
      {
        code: "august4yellow36",
        size: 36,
        inventory: 100,
      },
      {
        code: "august4yellow37",
        size: 37,
        inventory: 100,
      },
      {
        code: "august4yellow38",
        size: 38,
        inventory: 100,
      },
      {
        code: "august4yellow39",
        size: 39,
        inventory: 100,
      },
      {
        code: "august4yellow40",
        size: 40,
        inventory: 100,
      },
      {
        code: "august4yellow41",
        size: 41,
        inventory: 100,
        price: 52,
      },
      {
        code: "august4yellow42",
        size: 42,
        inventory: 100,
        price: 52,
      },
      {
        code: "august4yellow43",
        size: 43,
        inventory: 100,
      },
      {
        code: "august4yellow44",
        size: 44,
        inventory: 100,
        price: 48,
      },
    ],
  },
  {
    _id: 5,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    collection: "hot",
    classify: "socks",
    gender: "man",
    album: [image, image2, image3, image4],
    views: 0,
    favorite: 0,
    color: "blue",
    desc:
      "Sở hữu công thức pha màu 'khó chịu'. Urbas Unsettling tạo nên điểm nhấn mạnh mẽ, gây kích thích thị giác thông qua sự đối lập trong từng gam màu. Điểm chốt hạ cho một outfit đặc biệt thú vị, tách biệt khỏi sự trùng lặp thông thường.",
    info: [
      {
        code: "august5blue36",
        size: 36,
        inventory: 0,
      },
      {
        code: "august5blue37",
        size: 37,
        inventory: 15,
      },
      {
        code: "august5blue38",
        size: 38,
        inventory: 10,
      },
      {
        code: "august5blue39",
        size: 39,
        inventory: 0,
      },
      {
        code: "august5blue40",
        size: 40,
        inventory: 20,
      },
      {
        code: "august5blue41",
        size: 41,
        inventory: 220,
        price: 52,
      },
      {
        code: "august5blue42",
        size: 42,
        inventory: 10,
        price: 52,
      },
      {
        code: "august5blue43",
        size: 43,
        inventory: 16,
      },
      {
        code: "august5blue44",
        size: 44,
        inventory: 100,
        price: 48,
      },
    ],
  },
  {
    _id: 6,
    name: "VINTAS THE NEW MILITARY",
    price: 50,
    mainImg: image,
    collection: "sale",
    classify: "shoe",
    gender: "man",
    album: [image, image, image],
    views: 0,
    favorite: 0,
    color: "blue",
    info: [
      {
        code: "august6blue36",
        size: 36,
        inventory: 100,
      },
      {
        code: "august6blue37",
        size: 37,
        inventory: 100,
      },
      {
        code: "august6blue38",
        size: 38,
        inventory: 100,
      },
      {
        code: "august6blue39",
        size: 39,
        inventory: 100,
      },
      {
        code: "august6blue40",
        size: 40,
        inventory: 100,
      },
      {
        code: "august6blue41",
        size: 41,
        inventory: 100,
        price: 52,
      },
      {
        code: "august6blue42",
        size: 42,
        inventory: 100,
        price: 52,
      },
      {
        code: "august6blue43",
        size: 43,
        inventory: 100,
      },
      {
        code: "august6blue44",
        size: 44,
        inventory: 100,
        price: 48,
      },
    ],
  },
  // {
  //   _id: 7,
  //   name: "VINTAS THE NEW MILITARY",
  //   price: 50,
  //   mainImg: image,
  //   collection: "sale",
  //   classify: "shoe",
  //   gender: "man",
  //   album: [image, image, image],
  //   views: 0,
  //   favorite: 0,
  //   color: "red",
  //   info: [
  //     {
  //       code: "august7red36",
  //       size: 36,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august7red37",
  //       size: 37,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august7red38",
  //       size: 38,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august7red39",
  //       size: 39,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august7red40",
  //       size: 40,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august7red41",
  //       size: 41,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august7red42",
  //       size: 42,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august7red43",
  //       size: 43,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august7red44",
  //       size: 44,
  //       inventory: 100,
  //       price: 48,
  //     },
  //   ],
  // },
  // {
  //   _id: 8,
  //   name: "VINTAS THE NEW MILITARY",
  //   price: 50,
  //   mainImg: image,
  //   collection: "sale",
  //   classify: "shoe",
  //   gender: "man",
  //   album: [image, image, image],
  //   views: 0,
  //   favorite: 0,
  //   color: "black",
  //   info: [
  //     {
  //       code: "august8black37",
  //       size: 37,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august8black38",
  //       size: 38,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august8black39",
  //       size: 39,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august8black40",
  //       size: 40,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august8black41",
  //       size: 41,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august8black42",
  //       size: 42,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august8black43",
  //       size: 43,
  //       inventory: 100,
  //     },
  //   ],
  // },
  // {
  //   _id: 9,
  //   name: "VINTAS THE NEW MILITARY",
  //   price: 50,
  //   mainImg: image,
  //   collection: "sale",
  //   classify: "shoe",
  //   gender: "man",
  //   album: [image, image, image],
  //   views: 0,
  //   favorite: 0,
  //   color: "white",
  //   info: [
  //     {
  //       code: "august9white36",
  //       size: 36,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august9white37",
  //       size: 37,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august9white38",
  //       size: 38,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august9white39",
  //       size: 39,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august9white40",
  //       size: 40,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august9white41",
  //       size: 41,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august9white42",
  //       size: 42,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august9white43",
  //       size: 43,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august9white44",
  //       size: 44,
  //       inventory: 0,
  //       price: 48,
  //     },
  //   ],
  // },
  // {
  //   _id: 10,
  //   name: "VINTAS THE NEW MILITARY",
  //   price: 50,
  //   mainImg: image,
  //   collection: "sale",
  //   classify: "shoe",
  //   gender: "man",
  //   album: [image, image, image],
  //   views: 0,
  //   favorite: 0,
  //   color: "black",
  //   info: [
  //     {
  //       code: "august10black36",
  //       size: 36,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august10black37",
  //       size: 37,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august10black38",
  //       size: 38,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august10black39",
  //       size: 39,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august10black40",
  //       size: 40,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august10black41",
  //       size: 41,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august10black42",
  //       size: 42,
  //       inventory: 100,
  //       price: 52,
  //     },
  //     {
  //       code: "august10black43",
  //       size: 43,
  //       inventory: 100,
  //     },
  //     {
  //       code: "august10black44",
  //       size: 44,
  //       inventory: 100,
  //       price: 48,
  //     },
  //   ],
  // },
];
const BRAND_LIST = [nike, adidas, swarm, beatsPill, fiverr, xingLogo];

export {
  NAV_MAIN_LIST,
  BANNER_LIST,
  WOMAN_CATE,
  PRODUCT_LIST,
  MAN_CATE,
  BRAND_LIST,
};
