import React, { createRef, useEffect, useState } from "react";
import "./dialog-terms.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { addOrderToServer } from "actions/orderAction";
import { useHistory } from "react-router-dom";

DialogTerms.propTypes = {
  hiddenDialog: PropTypes.func,
};

function DialogTerms({ hiddenDialog }) {
  const dialogInnerRef = createRef();
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const func = (e) => {
      if (
        dialogInnerRef.current &&
        !dialogInnerRef.current.contains(e.target)
      ) {
        hiddenDialog();
      }
    };
    const func1 = (e) => {
      if (e.keyCode === 27) {
        hiddenDialog();
      }
    };
    document.addEventListener("mousedown", func);
    document.addEventListener("keydown", func1);
    return () => {
      document.removeEventListener("mousedown", func);
      document.addEventListener("keypress", func1);
    };
  }, []);

  const handleCloseClick = () => {
    hiddenDialog();
  };

  const handleAcceptClick = () => {
    if (checked) {
      dispatch(addOrderToServer());
      history.push("completed");
    }
  };

  const handleChange = (e) => {
    setChecked(e.currentTarget.checked);
  };

  return (
    <div className="dialog-terms">
      <div className="dialog-terms-inner" ref={dialogInnerRef}>
        <div className="dialog-terms__header">
          <h2>Điều khoản và chính sách</h2>
        </div>
        <div className="dialog-terms__tittle">
          <h3>1.Về phía khách hàng.</h3>
          <ul className="dialog-terms__list">
            <li>
              Kiểm tra cẩn thận thông tin và chi tiết đơn hàng trước khi thực
              hiện thanh toán.
            </li>
            <li>
              Chắc chắn rằng thẻ của bạn đã được kích hoạt dịch vụ thanh toán
              trực tuyến bởi Ngân hàng phát hành thẻ.
            </li>
            <li>
              Thực hiện đúng hướng dẫn sử dụng thanh toán thẻ theo khuyến cáo
              của Ngân hàng phát hành thẻ để đảm bảo an toàn trong giao dịch
              thanh toán trực tuyến.
            </li>
            <li>
              Không đóng cửa sổ màn hình giao dịch cho đến khi nhận được kết quả
              giao dịch cuối cùng. Trong trường hợp giao dịch bị gián đoạn, liên
              hệ hotline của August hoặc Ngân hàng phát hành thẻ để kiểm tra
              tình trạng giao dịch.
            </li>
            <li>
              Đồng ý việc phí thanh toán bằng thẻ (1% trên tổng giá trị đơn hàng
              bao gồm phí ship) sẽ không được hoàn lại trong mọi trường hợp phát
              sinh sau khi thanh toán thành công.
            </li>
            <li>
              Hiểu rõ về các chính sách giao hàng, đổi hàng các chính sách khác
              liên quan đến việc mua hàng, thanh toán tại website chính thức của
              August
            </li>
            <li>
              Liên hệ hotline:<a href="tel://19001000">19001000</a> hoặc inbox
              fanpage khi cần được hỗ trợ.
            </li>
          </ul>
          <h3>2.Về phía August Store.</h3>
          <ul className="dialog-terms__list">
            <li>
              Tuân thủ các biện pháp đảm bảo an toàn/ bảo mật thông tin tài
              khoản thanh toán cá nhân theo quy định của pháp luật cũng như các
              quy định và các khuyến nghị về giám sát của Ngân hàng Nhà nước.
            </li>
            <li>
              Hỗ trợ khách hàng giải quyết các vấn đề phát sinh trong quá trình
              thanh toán và giao dịch.
            </li>
            <li>
              Cam kết xử lí các vấn đề phát sinh trong quá trình thanh toán và
              giao dịch đúng quy trình trong thời gian sớm nhất có thể
            </li>
            <li>
              Trường hợp đơn hàng bị huỷ trước khi CHUYỂN QUA GIAO NHẬN, khoản
              thanh toán sẽ được hoàn lại tài khoản khách hàng từ 1-3 ngày làm
              việc (không tính thứ 7, chủ nhật) đối với thẻ nội địa và 7-10 ngày
              làm việc đối với thẻ quốc tế.
            </li>
            <li>
              Trường hợp xảy ra các tranh chấp phát sinh giữa khách hàng và
              Ananas, nếu việc hoàn lại khoản thanh toán là phương án được thống
              nhất giữa hai bên, vui lòng chờ đợi từ 1-5 ngày làm việc đối với
              thẻ nội địa và 7-12 ngày làm việc đối với thẻ quốc tế.
            </li>
            <li>
              Trong một số trường hợp có thể xảy ra vấn đề trong việc xử lí
              thông tin giao dịch đến từ các ngân hàng và cổng thanh toán, thời
              gian chờ đợi có thể lâu hơn.{" "}
            </li>
          </ul>
        </div>
        <div className="dialog-terms__footer">
          <p className="dialog-terms__footer-note">
            *Do 1 vài lỗi từ hệ thống của ví điện tử (đối với Zalopay), hoặc do
            chưa đủ điều kiện để tạo tài khoản doanh nghiệp (đối với Momo) nên
            chưa xử lí được api ở các lựa chọn ví điện tử, credit card, hệ thống
            sẽ mặc định xác nhận đã thanh toán khi người dùng lựa chọn 2 hình
            thức này. Dev đang nghiên cứu để sửa lại sớm nhất.
          </p>
          <input
            type="checkbox"
            name="accept"
            id="accept"
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="accept">
            Tôi đã đọc và chấp nhận những điều khoản bên trên.
          </label>
          <button
            className={classNames("btn accept-btn", {
              "btn--disable": !checked,
            })}
            onClick={handleAcceptClick}
          >
            Xác nhận
          </button>
        </div>
        <button className="btn close-btn" onClick={handleCloseClick}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default DialogTerms;
