const MAIN_LIST = [
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

export { MAIN_LIST };
