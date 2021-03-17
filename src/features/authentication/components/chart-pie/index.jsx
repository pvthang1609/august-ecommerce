import React from "react";
import PropTypes from "prop-types";
import { Pie } from "react-chartjs-2";
import "./chart-pie.scss";
import { COLORCHART } from "assets/CONSTANTS";

const { c1, c2, c3, c4, c5, c6 } = COLORCHART;

ChartPie.propTypes = {
  heading: PropTypes.string,
  height: PropTypes.number,
};

function ChartPie(props) {
  const { heading, height } = props;
  const data = {
    datasets: [
      {
        data: [10, 20, 30, 50, 90],
        backgroundColor: [c1, c2, c3, c4, c5, c6],
      },
    ],
    labels: ["item-1", "item-2", "item-3", "item-4", "item-5"],
  };
  const options = {
    maintainAspectRatio: false,
    legend: {
      position: "right",
      align: "start",
    },
    layout: {
      padding: {
        top: 15,
      },
    },
  };
  return (
    <div className="chart-pie" style={{ height: height }}>
      <div className="chart-pie__header">
        <h3>{heading}</h3>
        <div className="select-btn">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
      <div className="chart">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartPie;
