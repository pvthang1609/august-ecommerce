import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Toggle({ iconOn, iconOff, handleChange }) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    handleChange(isOn);
  }, [isOn]);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`flex h-6 w-12 p-1 rounded-full cursor-pointer trasition duration-500 hover:filter hover:brightness-95 ${
        isOn ? "justify-end" : "justify-start"
      } ${isOn ? "bg-gray-700" : "bg-gray-200"}`}
      onClick={handleClick}
    >
      <div className="h-4 w-4 bg-white rounded-full overflow-hidden dark:bg-gray-800">
        {isOn ? iconOn : iconOff}
      </div>
    </div>
  );
}

Toggle.propTypes = {
  iconOn: PropTypes.node,
  iconOff: PropTypes.node,
  handleChange: PropTypes.func,
};

export default Toggle;
