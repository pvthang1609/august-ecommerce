import { removeToCart } from "actions/cartAction";
import { clearOrderInState } from "actions/orderAction";
import completedTask from "assets/image/completed-task.svg";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./completed-order.scss";
// import PropTypes from "prop-types";

CompletedOrderPage.propTypes = {};

function CompletedOrderPage() {
  const [count, setCount] = useState(10);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "auto";
    if (!count) {
      dispatch(clearOrderInState());
      dispatch(removeToCart());
      history.go(0);
      return;
    }
    const func = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(func);
    };
  }, [count]);
  return (
    <div className="completed-order">
      <div className="completed-order__inner">
        <div className="completed-order__img">
          <img src={completedTask} alt="completedTask" />
        </div>
        <div className="completed-order__content">
          <p>Bạn đã đặt hàng thành công, đơn hàng #132132 đang được sắp xếp.</p>
          <p>
            Vui lòng để ý đến điện thoại, nhân viên cửa hàng sẽ gọi điện sớm cho
            bạn.
          </p>
        </div>
        <div className="completed-order__notify">
          <p>{`Trình duyệt sẽ trở về trang chủ sau ${count} giây nữa!`}</p>
        </div>
      </div>
    </div>
  );
}

export default CompletedOrderPage;
