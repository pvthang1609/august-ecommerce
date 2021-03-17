import React, { useEffect, useRef, useState } from "react";
import ChartLine from "../chart-line";
import ChartPie from "../chart-pie";
import MapVn from "../map";
import OrderList from "../order-list";
import OverviewCard from "../over-view-card";
// import PropTypes from 'prop-types';
import "./overview.scss";

OverView.propTypes = {};

function OverView() {
  const chartLineRef = useRef();
  const [heightChartLine, setHeightChartLine] = useState();

  useEffect(() => {
    setHeightChartLine(chartLineRef.current.firstChild.offsetHeight);
  }, [heightChartLine]);
  return (
    <div className="over-view">
      <div className="grid">
        <div className="row">
          <div className="col l-3">
            <OverviewCard heading="Đơn hàng" />
          </div>
          <div className="col l-3">
            <OverviewCard heading="Doanh số" />
          </div>
          <div className="col l-3">
            <OverviewCard heading="Doanh thu" />
          </div>
          <div className="col l-3">
            <OverviewCard heading="Lượt xem" />
          </div>
          <div className="col l-4">
            <ChartPie
              heading="Top 5 sản phẩm bán chạy nhất."
              height={(heightChartLine - 10) / 2}
            />
            <ChartPie
              heading="Top 5 sản phẩm được yêu thích nhất."
              height={(heightChartLine - 10) / 2}
            />
          </div>
          <div className="col l-8" ref={chartLineRef}>
            <ChartLine />
          </div>
          <div className="col l-8">
            <OrderList />
          </div>
          <div className="col l-4">
            <MapVn list={[{ id: "01", amount: 203 }]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
