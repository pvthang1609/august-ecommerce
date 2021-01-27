import React, { useState } from "react";
import "./slider-ranger.scss";
const unit = 5000;

export default function SliderRanger() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const show = () => {
    if (min > max) {
      alert("vui lòng đặt lại bộ lọc");
      setMin(0);
      setMax(100);
      return;
    }
    console.log(`min: ${min}`);
    console.log(`max: ${max}`);
  };
  return (
    <div>
      <div className="wrap" role="group" aria-labelledby="multi-lbl">
        <div id="multi-lbl">
          {min == 0 && max == 100
            ? `mọi loại giá`
            : min == 0
            ? `đến ${max * unit}đ`
            : max == 100
            ? `từ ${min * unit}đ`
            : `từ ${min * unit}đ đến ${max * unit}đ`}
        </div>
        <label className="sr-only" htmlFor="a">
          Value A:
        </label>
        <input
          id="a"
          type="range"
          min="0"
          max="100"
          value={min}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <label className="sr-only" htmlFor="b">
          Value B:
        </label>
        <input
          id="b"
          type="range"
          min="0"
          max="100"
          value={max}
          onChange={(e) => {
            setMax(e.target.value);
          }}
        />
      </div>
      <button onClick={show}>Lọc</button>
    </div>
  );
}
