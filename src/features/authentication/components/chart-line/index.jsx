import React from "react";
import { defaults, Line } from "react-chartjs-2";
// import PropTypes from 'prop-types';
import "./chart-line.scss";
import { COLORCHART } from "assets/CONSTANTS";

const { c1, c2 } = COLORCHART;

ChartLine.propTypes = {};
defaults.global.elements.line.tension = 0.3;
defaults.global.elements.line.fill = false;
defaults.global.elements.line.pointBackgroundColor = "#fff";

function ChartLine() {
  const data = {
    labels: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
    datasets: [
      {
        label: "Tổng số đơn hàng",
        borderColor: c1,
        data: [65, 59, 80, 81, 56, 55, 40, 58, 92, 11, 42, 35],
      },
      {
        label: "Doanh thu (triệu đồng)",
        borderColor: c2,
        data: [
          50.4,
          10.2,
          40.5,
          10.8,
          20.0,
          60.2,
          60.2,
          50.7,
          50.2,
          50.1,
          10.2,
          70.5,
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      position: "bottom",
      align: "center",
    },
    layout: {
      lineTension: 0.3,
    },
  };
  return (
    <div className="chart-line">
      <div className="chart-line__header">
        <h3>Thống kê bán hàng theo năm</h3>
        <div className="select-btn">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
      <div className="chart-line__overview">
        <div className="chart-line__overview-item">
          <p className="title">Tổng đơn hàng trong tháng</p>
          <p className="data">105 đơn</p>
          <p className="overview">
            <i className="fa fa-arrow-up" aria-hidden="true"></i> +1%
          </p>
        </div>
        <div className="chart-line__overview-item">
          <p className="title">Tổng doanh thu trong tháng</p>
          <p className="data">10,251,212đ</p>
          <p className="overview">
            <i className="fa fa-arrow-up" aria-hidden="true"></i> +5%
          </p>
        </div>
        <div className="chart-line__overview-item">
          <p className="title">Tổng lợi nhuận trong tháng</p>
          <p className="data">5,850,212đ</p>
          <p className="overview">
            <i className="fa fa-arrow-up" aria-hidden="true"></i> +2%
          </p>
        </div>
      </div>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartLine;
