import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./overview-card.scss";

OverviewCard.propTypes = {
  heading: PropTypes.string,
};

function OverviewCard(props) {
  const { heading } = props;
  return (
    <div className="overview-card">
      <div className="overview-card__header">
        <div className="heading">{heading}</div>
        <Link to="#">Xem</Link>
      </div>
      <div className="overview-card__main">
        <div className="overview-card__main-title">Trong tháng</div>
        <div className="overview-card__main-data">
          51,642<span>+5%</span>{" "}
        </div>
      </div>
      <div className="overview-card__footer">
        <div className="overview-card__footer-progress-bar">
          <div className="progress-active"></div>
        </div>
        <div className="overview-card__footer-title">
          <i className="fa fa-line-chart" aria-hidden="true"></i>%18 decrease
          from last month
        </div>
      </div>
    </div>
  );
}

export default OverviewCard;
