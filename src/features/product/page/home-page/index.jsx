import { BANNER_LIST } from "assets/CONSTANTS";
import Banner from "components/banner";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Banner bannerList={BANNER_LIST} />
    </div>
  );
}
