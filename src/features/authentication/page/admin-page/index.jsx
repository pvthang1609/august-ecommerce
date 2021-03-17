import { Logo, NotFound } from "assets/import";
import OverView from "features/authentication/components/over-view";
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import pieChart from "assets/image/menu-admin/pie-chart.svg";
import runningShoe from "assets/image/menu-admin/running-shoe.svg";
import man from "assets/image/menu-admin/man.svg";
import invoice from "assets/image/menu-admin/invoice.svg";
import giftBox from "assets/image/menu-admin/gift-box.svg";

import "./admin-page.scss";
import ProductManage from "features/authentication/components/product-manage";
// import PropTypes from "prop-types";

AdminPage.propTypes = {};

function AdminPage() {
  const match = useRouteMatch();

  return (
    <div className="admin-page">
      <div className="admin-page__menu">
        <div className="menu__logo">
          <Logo size={3.5} />
        </div>
        <div className="menu__menu-list">
          <ul>
            <li className="menu__menu-item">
              <Link to={`${match.url}`}>
                <img src={pieChart} alt="pieChart" />
                <span>Tổng quan</span>
              </Link>
            </li>
            <li className="menu__menu-item">
              <Link to={`${match.url}/product`}>
                <img src={runningShoe} alt="runningShoe" />
                <span>Quản lý sản phẩm</span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="menu__menu-item">
              <Link to={`${match.url}/user`}>
                <img src={man} alt="man" />
                <span>Quản lý tài khoản</span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="menu__menu-item">
              <Link to={`${match.url}/invoice`}>
                <img src={invoice} alt="invoice" />
                <span>Quản lý đơn hàng</span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="menu__menu-item">
              <Link to={`${match.url}/discount`}>
                <img src={giftBox} alt="gift-box" />
                <span>Khuyến mại</span>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="admin-page__content">
        <div className="content__header">
          <div className="content__header-right">
            <p className="header__heading">
              <Switch>
                <Route path={`${match.url}/overview`}>Tổng quan</Route>
                <Route path={`${match.url}/product`}>Quản lý sản phẩm</Route>
                <Route path={`${match.url}/user`}>Quản lý tài khoản</Route>
                <Route path={`${match.url}/invoice`}>Quản lý đơn hàng</Route>
                <Route path={`${match.url}/discount`}>
                  Quản lý chương trình khuyến mại
                </Route>
              </Switch>
            </p>
          </div>
          <div className="content__header-right">
            <div className="header__find">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input type="text" placeholder="Tìm kiếm" />
            </div>
            <div className="header__inner header__notifi">
              <i className="fa fa-comments-o" aria-hidden="true"></i>
              <div className="header__inner-numb header__notifi-numb">99</div>
            </div>
            <div className="header__inner header__notifi">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <div className="header__inner-numb header__notifi-numb">99</div>
            </div>
            <div className="header__user">
              <div className="header__user-avatar"></div>
              <div className="header__user-name">admin</div>
            </div>
          </div>
        </div>
        <div className="content__main">
          <Switch>
            <Route exact path={`${match.url}/`}>
              <OverView />
            </Route>
            <Route path={`${match.url}/product`}>
              <ProductManage />
            </Route>
            <Route path={`${match.url}/user`}>USER</Route>
            <Route path={`${match.url}/invoice`}>INVOICE</Route>
            <Route path={`${match.url}/discount`}>DISCOUNT</Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
