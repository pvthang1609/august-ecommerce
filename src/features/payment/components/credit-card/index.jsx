import React from "react";
import "./credit-card.scss";
import World from "assets/image/world.svg";
import Visa_Debit_Logo from "assets/image/payment-logo/Visa_Debit_Logo.svg";
import chipCard from "assets/image/chip-card.svg";

import PropTypes from "prop-types";
import {
  convertNumberCard,
  removeVietnameseTones,
} from "custom-hooks/globalFunc";

CreditCard.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
};

function CreditCard(props) {
  const { number, name, date } = props;
  return (
    <div className="credit-card">
      <div className="credit-card__background">
        <img src={World} alt="world" />
      </div>
      <div className="credit-card__logo">
        <img src={Visa_Debit_Logo} alt="world" />
      </div>
      <div className="credit-card__chip-card">
        <img src={chipCard} alt="chipCard" />
      </div>
      <div className="credit-card__content">
        <div className="credit-card__content-number">
          <p>{convertNumberCard(number)}</p>
        </div>
        <div className="credit-card__content-name">
          <p>{removeVietnameseTones(name)}</p>
          <p>
            <span>EXP: </span>
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
