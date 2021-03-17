import React, { useEffect, useState } from "react";
import "./product-manage.scss";
import ProductManageItem from "./components/product-manage-item";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "actions/productAction";

ProductManage.propTypes = {};

function ProductManage() {
  const [params, setParams] = useState({ page: 1, limit: 8 });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const { products } = state;

  useEffect(async () => {
    dispatch(getListProduct(params));
  }, [params, products]);

  const handlePrevBtnClick = () => {
    if (params.page > 1) {
      const newPage = params.page - 1;
      const newParams = { ...params, page: newPage };
      setParams(newParams);
    } else {
      alert("not Run");
    }
  };
  const handleNextBtnClick = () => {
    if (params.page < products.totalPage) {
      const newPage = params.page + 1;
      const newParams = { ...params, page: newPage };
      setParams(newParams);
    } else {
      alert("not Run");
    }
  };
  return (
    <div className="product-manage">
      <div className="grid table-product-manage">
        <div className="row bd-bot--1">
          <div className="col l-1">
            <div className="header-title">STT</div>
          </div>
          <div className="col l-1">
            <div className="header-title">Ảnh</div>
          </div>
          <div className="col l-4">
            <div className="header-title">Tên Sản phẩm</div>
          </div>
          <div className="col l-2">
            <div className="header-title">Giá</div>
          </div>
          <div className="col l-1">
            <div className="header-title">Thẻ</div>
          </div>
          <div className="col l-2">
            <div className="header-title">Thương hiệu</div>
          </div>
          <div className="col l-1">
            <div className="header-title">Action</div>
          </div>
        </div>
        {products &&
          products.queryProducts.map((item, index) => {
            return <ProductManageItem item={item} index={index} key={index} />;
          })}
        <div className="row">
          <div className="col l-2 l-o-5">
            <div className="product-manage__group-btn">
              <button onClick={handlePrevBtnClick} className="btn">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </button>
              <div>{params.page}</div>
              <button onClick={handleNextBtnClick} className="btn">
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManage;
