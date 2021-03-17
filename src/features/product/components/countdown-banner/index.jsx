import React from "react";
import PropTypes from "prop-types";
import useCountdown from "custom-hooks/useCountdown";
import { twoDigit } from "custom-hooks/globalFunc";
import "./coutndown-banner.scss";
import countDownImg from "assets/image/countdown-banner/01.jpg";

CountdownBanner.propTypes = {
  year: PropTypes.number,
  month: PropTypes.number,
  day: PropTypes.number,
  hour: PropTypes.number,
  minute: PropTypes.number,
};

function CountdownBanner(props) {
  const { year = 2021, month = 3, day = 15, hour = 0, minute = 0 } = props;
  const { dy, hrs, mins, secs } = useCountdown({
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
  });
  return (
    <div className="countdown-banner">
      <div className="countdown-banner__text">
        <div className="heading">
          <h2>Mừng sinh nhật !!</h2>
        </div>
        <div className="content">Giảm giá toàn bộ 20%</div>
        <div className="countdown">
          <p>chỉ còn:</p>
          <div className="time-number">
            <div className="time-number__item time__day">{twoDigit(dy)}</div>
            <div className="time-number__item time__hrs">{twoDigit(hrs)}</div>
            <div className="time-number__item time__min">{twoDigit(mins)}</div>
            <div className="time-number__item time__secs">{twoDigit(secs)}</div>
          </div>
          <div className="time-text">
            <div className="time-text__item time__day">Ngày</div>
            <div className="time-text__item time__hrs">Giờ</div>
            <div className="time-text__item time__min">Phút</div>
            <div className="time-text__item time__secs">Giây</div>
          </div>
        </div>
      </div>
      <div className="countdown-banner__image">
        <img src={countDownImg} alt="count-down-image" />
      </div>
    </div>
  );
}

export default CountdownBanner;
