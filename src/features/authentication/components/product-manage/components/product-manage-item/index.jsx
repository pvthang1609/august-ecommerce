import React from "react";
import PropTypes from "prop-types";
import { convertPrice } from "custom-hooks/globalFunc";
import "./product-manage-item.scss";
import { useDispatch } from "react-redux";
import { deleteProduct } from "actions/productAction";

ProductManageItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

function ProductManageItem(props) {
  const { item, index } = props;
  const dispatch = useDispatch();

  const handleDeleteBtn = (id) => {
    if (window.confirm("Bạn chắc chắn muốn xóa sản phẩm này chứ?")) {
      dispatch(deleteProduct(id));
    }
  };

  const handleChange = () => {
    console.log("isRun");
  };
  return (
    <div
      className="row product-manage__item"
      style={index % 2 === 0 ? { backgroundColor: "#f3f3f3" } : null}
    >
      <div className="col l-1">
        <div className="item-title">
          <input type="checkbox" checked={handleChange} />
          {index + 1}
        </div>
      </div>
      <div className="col l-1">
        <div className="item-title item-title__img">
          <img src={item.img[0]} alt="" />
        </div>
      </div>
      <div className="col l-4">
        <div className="item-title">{item.name}</div>
      </div>
      <div className="col l-2">
        <div className="item-title">{`${convertPrice(item.price)}đ`}</div>
      </div>
      <div className="col l-1">
        <div className="item-title">{item.tag}</div>
      </div>
      <div className="col l-2">
        <div className="item-title">{item.brand}</div>
      </div>
      <div className="col l-1">
        <div className="item-title">
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <i
            className="fa fa-trash"
            aria-hidden="true"
            onClick={() => handleDeleteBtn(item["_id"])}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default ProductManageItem;
