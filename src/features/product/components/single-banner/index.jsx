import React from "react";
import PropTypes from "prop-types";
import "./single-banner.scss";
import { Link } from "react-router-dom";

SingleBanner.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  heading: PropTypes.string,
  link: PropTypes.object,
  image: PropTypes.string,
};

function SingleBanner(props) {
  const { className, content, heading, link, image } = props;
  return (
    <div className={className}>
      <div className="single-banner">
        <img src={image} alt="single-banner" />
        <div className="single-banner__tittle">
          <div className="heading">{heading}</div>
          <div className="content">{content}</div>
          <Link to={link.url}>{link.name}</Link>
        </div>
      </div>
    </div>
  );
}

export default SingleBanner;
