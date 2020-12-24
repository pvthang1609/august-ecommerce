import { createSlice } from "@reduxjs/toolkit";

const initDetailProducts = {
  detail: {
    classify: "",
    category: "shirt",
    album: [
      "https://robohash.org/optiorepellendusporro.png?size=1500x1500&set=set1",
      "https://robohash.org/suntvoluptatesest.bmp?size=1500x1500&set=set1",
      "https://robohash.org/quaeratidest.jpg?size=1500x1500&set=set1",
      "https://robohash.org/omnisdoloremqueut.png?size=1500x1500&set=set1",
      "https://robohash.org/atqueinventoreid.jpg?size=1500x1500&set=set1",
      "https://robohash.org/magniducimusipsa.png?size=1500x1500&set=set1",
    ],
    views: 0,
    favorite: 434,
    _id: "5fdce630edf82b7710d5fb67",
    id: 46,
    name: "Lappet-faced vulture",
    price: 260,
    mainImg: "https://robohash.org/saepedoloremrem.jpg?size=1500x1500&set=set1",
    gender: "Female",
    view: 846,
    desc:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    info: [
      {
        code: "aug-s36",
        size: 36,
        inventory: 50,
      },
      {
        code: "aug-s37",
        size: 37,
        inventory: 70,
      },
      {
        code: "aug-s38",
        size: 38,
        inventory: 30,
      },
      {
        code: "aug-s39",
        size: 39,
        inventory: 65,
      },
      {
        code: "aug-s40",
        size: 40,
        inventory: 50,
      },
      {
        code: "aug-s41",
        size: 41,
        inventory: 145,
      },
      {
        code: "aug-s42",
        size: 42,
        inventory: 35,
      },
      {
        code: "aug-s43",
        size: 43,
        inventory: 100,
      },
    ],
    timeInit: "2020-08-25T03:05:29.000Z",
  },
  loading: false,
};

const detailProductSlice = createSlice({
  name: "detailProduct",
  initialState: initDetailProducts,
  reducers: {
    detail_product_request: (state) => {
      state.loading = true;
    },
    detail_product_success: (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    },
    detail_product_fail: (state, action) => {
      state.fail = action.payload;
      state.loading = false;
    },
  },
});

const { actions, reducer } = detailProductSlice;

export const {
  detail_product_request,
  detail_product_success,
  detail_product_fail,
} = actions;

export default reducer;
