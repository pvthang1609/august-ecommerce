import React, { useState } from "react";
import "./tab-headers.scss";

const classNames = require("classnames");

export default function TabHeaders({ list }) {
  const [isActive, setIsActive] = useState("all");

  const handleOnclick = (queryString) => {
    setIsActive(queryString);
    console.log(`query for category: ${queryString}`);
  };

  return (
    <div className="tab-headers">
      {console.log(isActive)}
      {list.map((item, index) => {
        return (
          <button
            className={classNames("tab-headers__tablink", {
              "tablink-actived": isActive === item.name,
            })}
            key={index}
            onClick={() => handleOnclick(item.name)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
