import React from "react";
import Logo from "components/logo";
import { Link } from "react-router-dom";

import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grid wide">
        <div className="row">
          <div className="col l-5">
            <div className="footer__item">
              <Logo size={5} />
              <ul>
                <li>
                  <span>Địa chỉ:</span> 22 Lý Chiêu Hoàng, Phường 10, Quận 6, TP
                  HCM
                </li>
                <li>
                  <span>Sđt:</span> (028) 38 753 443
                </li>
                <li>
                  <span>Email:</span> Liên hệ các vấn đề về đặt hàng online:
                  tuvan_online@august.com.vn
                </li>
                <li>
                  <span>Email:</span> Liên hệ các vấn đề về kênh cửa hàng, đại
                  lý (offline): chamsockhachhang@august.com.vn
                </li>
                <li>
                  {" "}
                  <span>Hotline:</span> 19002126 ( cước phí: 3000đ/phút)
                </li>
                <li>
                  <span>Thời gian tư vấn</span>: Từ 07h30 đến 12h15, 13h15 đến
                  21h30 các ngày trong tuần ( Trừ ngày Lễ, Tế)
                </li>
              </ul>
            </div>
          </div>
          <div className="col l-3">
            <div className="footer__item">
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
          </div>
          <div className="col l-2">
            <div className="footer__item">
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
          </div>
          <div className="col l-2">
            <div className="footer__item">
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
      </div>
    </footer>
  );
}
