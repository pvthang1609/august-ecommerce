import React from "react";
import Logo from "components/logo";
import { Link } from "react-router-dom";

import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Logo />
        <div className="footer__content">
          <div className="footer__content--blockList">
            <p>
              <span>Địa chỉ:</span> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP HCM
            </p>
            <p>
              <span>Sđt:</span> (028) 38 753 443
            </p>
            <p>
              <span>Email:</span> Liên hệ các vấn đề về đặt hàng online:
              tuvan_online@august.com.vn
            </p>
            <p>
              <span>Email:</span> Liên hệ các vấn đề về kênh cửa hàng, đại lý
              (offline): chamsockhachhang@august.com.vn
            </p>
            <p>
              <span>Hotline:</span> 19002126 ( cước phí: 3000đ/phút)
            </p>
            <p>
              Thời gian tư vấn: Từ 07h30 đến 12h15, 13h15 đến 21h30 các ngày
              trong tuần ( Trừ ngày Lễ, Tế)
            </p>
          </div>
          <div className="footer__content--blockList">
            <h3>Trợ Giúp</h3>
            <ul>
              <li>
                <Link to="#">Trạng thái đơn hàng</Link>
              </li>
              <li>
                <Link to="#">Hình thức giao hàng</Link>
              </li>
              <li>
                <Link to="#">Hình thức thanh toán</Link>
              </li>
              <li>
                <Link to="#">Chính sách đổi trả</Link>
              </li>
              <li>
                <Link to="#">Chính sách bảo hành</Link>
              </li>
              <li>
                <Link to="#">Chính sách khách hàng thân thiết</Link>
              </li>
            </ul>
          </div>
          <div className="footer__content--blockList">
            <h3>Thông tin</h3>
            <ul>
              <li>
                <Link to="#">Tuyển dụng</Link>
              </li>
              <li>
                <Link to="#">Hệ thống cửa hàng</Link>
              </li>
              <li>
                <Link to="#">Hình thức thanh toán</Link>
              </li>
              <li>
                <Link to="#">Liên hệ hợp tác</Link>
              </li>
              <li>
                <Link to="#">Q&A</Link>
              </li>
            </ul>
          </div>
          <div className="footer__content--blockList">
            <h3>Về August Store</h3>
            <ul>
              <li>
                <Link to="#">Về August</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
