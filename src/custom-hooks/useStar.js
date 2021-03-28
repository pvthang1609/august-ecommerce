import React from "react";

function useStar(numb = 0) {
  const arrStar = [];
  if (Number.isInteger(numb) && numb >= 0 && numb <= 5) {
    for (let i = 0; i < numb; i++) {
      arrStar.push(<i className="fa fa-star" aria-hidden="true"></i>);
    }
    for (let i = 0; i < 5 - numb; i++) {
      arrStar.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
    }
  } else if (!Number.isInteger(numb) && numb >= 0 && numb <= 5) {
    const numbFloor = Math.floor(numb);
    for (let i = 0; i < numbFloor; i++) {
      arrStar.push(<i className="fa fa-star" aria-hidden="true"></i>);
    }
    arrStar.push(<i className="fa fa-star-half-o" aria-hidden="true"></i>);
    for (let i = 0; i < 4 - numbFloor; i++) {
      arrStar.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
    }
  }
  return arrStar;
}
export default useStar;
